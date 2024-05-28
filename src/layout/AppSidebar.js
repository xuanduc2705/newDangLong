import { listToast, status } from "@/constants";
import { setItem, setToast, ToggleLoading } from "@/redux/features";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuProvider } from "./context/menucontext";
import MenuSidebar from "./MenuSidebar";
import { Dropdownz } from "@/components/data_table/FormList";
import { useListProject } from "./utils";
import { useUserInfo } from "@/axios/utils";
import { Badge } from "@/uiCore";
import { useListCountMess, useListMessage } from "@/modules/message/utils";

const handleTreeSelect = (data) => {
  let newData = [];
  if (data && data[0]) {
    newData = data.map((d) => {
      const children =
        d.buildings && d.buildings[0]
          ? d.buildings.map((b) => {
              return {
                key: d.id + "-" + b.id,
                label: b.name,
                icon: "pi pi-building",
              };
            })
          : [];
      return { key: d.id + "", label: d.name, children };
    });
  }
  return newData;
};

const HeaderSideBar = (props) => {
  const { data, setVisible, item, setModel } = props;
  const [selectedNodeKey, setSelectedNodeKey] = useState(() => {
    return item.building_id
      ? item.company_id + "-" + item.building_id
      : item.company_id;
  });
  const [infos, setInfos] = useState();
  useEffect(() => {
    if (item) {
      setInfos(item);
    }
  }, [item]);

  useEffect(() => {}, []);

  const user_info = useUserInfo();
  return (
    <div className="header-sidebar">
      <div className="w-full grid grid-form align-item-center  mt-4">
        <div className="col-4 text-right cursor-pointer">
          <img
            src={
              user_info?.data?.avatar
                ? user_info?.data?.avatar
                : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            }
            height="48px"
            width="48px"
            alt="Ảnh đại diện"
            style={{ borderRadius: "50%", border: "4px solid #e9ecef" }}
          ></img>
        </div>
        <div className="col-8 text-left text-ellipsis">
          <b>
            {user_info?.data?.name
              ? user_info?.data?.name
              : "user" + user_info?.data?.id}
          </b>
          <div className="mt-1">
            <i
              className="pi pi-circle-fill mr-2"
              style={{ color: "#28a745" }}
            />
            <b>Online</b>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppSidebar = ({ setVisible }) => {
  const dispatch = useDispatch();
  const myTool = useSelector((state) => state.myTool) || {};
  const item = useSelector((state) => state.item) || {};
  const [params, setParams] = useState({});
  const location = useLocation();
  const [data, setData] = useState();
  const data_project = useListProject();
  const [model, setModel] = useState();
  useEffect(() => {
    if (data_project && data_project?.[0]) {
      setModel([
        {
          children: [
            {
              name: "Trang chủ",
              icon: "pi pi-home",
              children: [{ name: "Trang chủ", route: "/" }],
            },
            {
              name: "Quản lý dự án",
              icon: "pi pi-check-square",
              children: [{ name: "Quản lý khách hàng", route: "/divide" }],
            },
            {
              name: "Tổng quan dự án",
              icon: "pi pi-address-book",
              children: data_project?.map((e) => ({
                name: e?.name,
                route: "/project_overview",
                project: e,
              })),
            },
          ],
        },
      ]);
    }
  }, [data_project]);
  const project = JSON.parse(localStorage.getItem("item"));
  let list_chat;
  list_chat = useListMessage({
    project_id: project?.project_id_ad,
    token: project?.access_token,
    status: undefined,
  });
  useEffect(() => {
    let title;
    const type = item.building_id ? "building" : "company";
    const newData = myTool.myMenuTool.filter((m) => m.type === type || !m.type);
    newData.forEach((nd) => {
      if (nd.children && nd.children[0]) {
        nd.children.forEach((ndc) => {
          if (
            location.pathname.includes(ndc.route + "/") ||
            location.pathname === ndc.route
          )
            title = ndc.name;
        });
      }
    });
    if (title) document.title = title;
  }, [location.pathname, myTool]);

  return (
    <MenuProvider>
      <HeaderSideBar
        item={item}
        setVisible={setVisible}
        data={data_project}
        setModel={setModel}
      />
      <ul className="layout-menu ">
        {model?.map((item, i) => {
          return <MenuSidebar item={item} root={true} index={i} key={i} />;
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppSidebar;
