import "./styles/layout.scss";
import React, { useState, useRef, useEffect } from "react";
import { classNames } from "primereact/utils";
import AppTopbar from "./AppTopbar";
import AppSidebar from "./AppSidebar";
import AppFooter from "./AppFooter";
import UserInfo from "./UserInfo";

const Layout = (props) => {
  const sidebarRef = useRef(null);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [visible, setVisible] = useState(false);
  const onMenuToggle = () => {
    setHideSidebar(!hideSidebar);
  };
  useEffect(() => {
    if (hideSidebar) {
      localStorage.setItem("hideSidebar", true);
    } else {
      localStorage.setItem("hideSidebar", false);
    }
  }, [hideSidebar]);
  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth < 1300) {
        setHideSidebar(true);
      } else {
        setHideSidebar(false);
      }
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <React.Fragment>
      {visible && <UserInfo visible={visible} setVisible={setVisible} />}
      <div className="layout-wrapper">
        <AppTopbar onMenuToggle={onMenuToggle} setVisible={setVisible} />
        <div
          ref={sidebarRef}
          className={classNames("layout-sidebar", { "hide-menu": hideSidebar })}
        >
          <AppSidebar setVisible={setVisible} />
        </div>
        <div
          className={classNames("layout-main-container", {
            "hide-sidebar": hideSidebar,
          })}
        >
          <div className="layout-main">{props.children}</div>
          <AppFooter />
        </div>
        <div
          className={classNames({ "layout-mask": !hideSidebar })}
          onClick={onMenuToggle}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
