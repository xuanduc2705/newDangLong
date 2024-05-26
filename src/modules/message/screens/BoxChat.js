import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { HeaderListForm } from "@/components/data_table/FormList";
import { Avatar } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { useListCountMess } from "../utils";
import { updateLastCount } from "../api";
import { useState } from "react";
const Boxchat = (props) => {
  const {
    project,
    selected,
    setSelected,
    list_chat,
    params,
    setParams,
    setRender,
    render,
    list_count,
    setIsScroll,
  } = props;
  const calculateTimeFromNow = (createdAt) => {
    const currentTime = new Date();
    const postCreatedAt = new Date(createdAt);
    const timeDiff = Math.round((currentTime - postCreatedAt) / 60000);
    const day = String(createdAt).substring(0, 10).split("-");
    if (timeDiff < 60) {
      if (timeDiff < 1) {
        return "Vừa xong";
      }
      return `${timeDiff} phút`;
    } else if (timeDiff < 1440) {
      const hoursDiff = Math.floor(timeDiff / 60);
      return `${hoursDiff} giờ`;
    } else if (timeDiff < 10080) {
      const daysDiff = Math.floor(timeDiff / 1440);
      return `${daysDiff} ngày`;
    } else {
      return `${day?.[2]}-${day?.[1]}-${day?.[0]}`;
    }
  };
  const handleSelected = async (e) => {
    setSelected({
      id: e.id,
      name: e?.senders?.data[0].name,
      user_id: e?.senders?.data[0].id,
    });
    setIsScroll(true);
    await updateLastCount({
      chat_id: e?.id,
      last_count: e?.message_count,
    });
    setParams((pre) => {
      return { ...pre, render: !pre.render };
    });
  };
  const getNoti = (e) => {
    const update_data = e?.message_count;
    const last_data = list_count?.filter(
      (c_item) => c_item?.chat_id === e?.id
    )?.[0]?.last_count;
    return update_data - last_data;
  };
  return (
    <>
      {project?.project_id && (
        <div className="col-3 flex flex-column ">
          <IconField iconPosition="left" className="mt-3 mb-4 mx-3">
            <InputIcon className="pi pi-search"></InputIcon>
            <InputText v-model="value1" placeholder="Nhập tên..." />
          </IconField>
          {list_chat.map((e, index) => (
            <div
              className={
                e?.senders?.data[0]?.name == selected?.name
                  ? "grid py-3 px-3 selected_user_clicked"
                  : "grid py-3 px-3 selected_user"
              }
              onClick={() => handleSelected(e)}
            >
              <div className="col-2 mr-2">
                <Avatar src={e?.avatar} sx={{ width: 55, height: 55 }} />
              </div>
              <div className="col-9 p-2 flex flex-column">
                <div className="flex flex-row justify-content-between">
                  <span className="font-semibold text-xl mb-1">
                    {e?.senders?.data?.[0]?.name}
                  </span>
                  <span className="text-xs ">
                    {calculateTimeFromNow(
                      e?.messages?.data?.sort((a, b) =>
                        a.created_time < b.created_time ? 1 : -1
                      )?.[0]?.created_time
                    )}
                  </span>
                </div>
                <div className="flex flex-row justify-content-between">
                  <span
                    className="font-medium text-500 text-md overflow-hidden white-space-nowrap text-overflow-ellipsis mt-1"
                    style={{ width: "200px" }}
                  >
                    {!(
                      e?.messages?.data?.sort((a, b) =>
                        a.created_time < b.created_time ? 1 : -1
                      )?.[0]?.attachments ||
                      e?.messages?.data?.sort((a, b) =>
                        a.created_time < b.created_time ? 1 : -1
                      )?.[0]?.sticker
                    )
                      ? e?.messages?.data?.sort((a, b) =>
                          a.created_time < b.created_time ? 1 : -1
                        )?.[0]?.message
                      : e?.senders?.data?.[0]?.name + " đã gửi 1 file"}
                  </span>
                  {getNoti(e) > 0 && (
                    <div
                      style={{
                        width: "25px",
                        aspectRatio: "1",
                        backgroundColor: "red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        color: "white",
                      }}
                    >
                      {getNoti(e)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Boxchat;
