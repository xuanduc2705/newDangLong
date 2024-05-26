import { Avatar } from "@mui/material";
import { useListCountMess, useListMessage } from "../utils";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { MessageLastCount, sendMessage, updateLastCount } from "../api";
import { useGetParams } from "@/hooks";
import Boxchat from "./BoxChat";
import { Image } from "@/uiCore";
import { getData } from "@/lib/request";

const Message = () => {
  const [params, setParams] = useState({});
  const [render, setRender] = useState(false);
  const project = JSON.parse(localStorage.getItem("item"));
  let list_chat;
  list_chat = useListMessage({
    project_id: project?.project_id_ad,
    token: project?.access_token,
    status: undefined,
    ...params,
  });

  const getTime = (timestamp) => {
    const date = new Date(timestamp);
    const hoursWithTimeZone = date.getUTCHours() + 7;
    const hours = String(hoursWithTimeZone).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const list_count = useListCountMess({ status: undefined, ...params });
  const [selected, setSelected] = useState({});
  const [isScroll, setIsScroll] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const chatContainerRef = useRef(null);
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      if (message !== "") {
        const res = await sendMessage({
          project_id: project?.project_id_ad,
          token: project?.access_token,
          user_id: selected?.user_id,
          message: message,
        });
        if (res?.status) {
          setMessage("");
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
              chatContainerRef.current.scrollHeight;
          }
          await MessageLastCount({
            chat_id: selected?.id,
          });
          setParams((pre) => {
            return { ...pre, render: !pre.render };
          });
        }
      }
    }
  };
  useEffect(() => {
    if (isScroll) {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
      setIsScroll(false);
    }
  }, [isScroll]);
  return (
    <div className=" h-full pr-2">
      <div className="grid h-full" style={{ position: "relative" }}>
        {list_chat && list_chat[0] && selected?.id && (
          <div className="input_type w-full flex flex-row-reverse">
            <InputText
              placeholder="Nhập tin nhắn "
              style={{
                height: "60px",
                width: "calc(75% - 4px)",
                marginRight: "2px",
              }}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={message}
            />
          </div>
        )}
        <Boxchat
          project={project}
          selected={selected}
          setSelected={setSelected}
          list_chat={list_chat}
          setParams={setParams}
          params={params}
          setRender={setRender}
          render={render}
          list_count={list_count}
          setIsScroll={setIsScroll}
        />
        {list_chat && list_chat[0] && selected?.id && (
          <div className="col-9 info_message border-left-2">
            <div className="flex flex-column">
              <div
                className="flex flex-row p-3 shadow-5"
                style={{ zIndex: "10" }}
              >
                <Avatar sx={{ width: 50, height: 50 }} />
                <div className="flex flex-column">
                  <span className="font-bold text-lg mx-3 mt-1">
                    {selected?.name}
                  </span>
                  <span className="mx-3 my-1 text-500	">Online</span>
                </div>
              </div>
              <div
                className="py-5 mb-5 px-3 "
                ref={chatContainerRef}
                style={{
                  maxHeight: "80vh",
                  minHeight: "80vh",
                  overflowY: "auto",
                }}
              >
                {list_chat
                  ?.filter((e) => e.id == selected?.id)[0]
                  ?.messages?.data?.sort((a, b) =>
                    a.created_time > b.created_time ? 1 : -1
                  )
                  .map((e, index) => (
                    <>
                      {e?.from?.name == selected?.name ? (
                        <>
                          <div className="flex flex-row my-2">
                            <Avatar className="mr-3" />
                            <div className="flex flex-column">
                              {e?.message !== null && e?.message !== "" && (
                                <div className="card flex flex-column message_chat shadow-6">
                                  <span className="text-xs font-semibold mb-3">
                                    {e?.from?.name}
                                  </span>
                                  <span>{e?.message}</span>
                                  <span className="text-xs font-semibold mt-3 text-500	">
                                    {getTime(e?.created_time)}
                                  </span>
                                </div>
                              )}
                              {e?.attachments?.data?.[0] && (
                                <div className="card flex flex-column shadow-6 message_chat">
                                  <span className="text-xs font-semibold mb-3">
                                    {e?.from?.name}
                                  </span>
                                  <Image
                                    src={
                                      e?.attachments?.data?.[0]?.image_data?.url
                                    }
                                    alt="Image"
                                    width={
                                      e?.attachments?.data?.[0]?.image_data
                                        ?.width > 500
                                        ? "500px"
                                        : `${e?.attachments?.data?.[0]?.image_data?.width}px`
                                    }
                                    preview
                                  />
                                  <span className="text-xs font-semibold mt-3 text-500	">
                                    {getTime(e?.created_time)}
                                  </span>
                                </div>
                              )}
                              {e?.sticker && (
                                <div className="card flex flex-column shadow-6 message_chat">
                                  <span className="text-xs font-semibold mb-3">
                                    {e?.from?.name}
                                  </span>
                                  <Image
                                    src={e?.sticker}
                                    alt="Image"
                                    width="200px"
                                    preview={false}
                                  />
                                  <span className="text-xs font-semibold mt-3 text-500	">
                                    {getTime(e?.created_time)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {e?.message !== null && e?.message !== "" && (
                            <div className="flex flex-row-reverse my-2">
                              <div
                                style={{
                                  maxWidth: "50%",
                                  wordBreak: "break-all",
                                }}
                                className="card message_chat bg-blue-400 text-white	flex flex-column shadow-6"
                              >
                                <span>{e?.message}</span>
                                <span className="text-xs font-semibold mt-3">
                                  {getTime(e?.created_time)}
                                </span>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Message;
