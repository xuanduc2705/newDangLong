import { Link, useLocation } from "react-router-dom";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { ToggleLoading, setItem, setToast } from "@/redux/features";
import { listToast } from "@/constants";

const MenuSidebar = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const item = props.item;
  const key = props.parentKey
    ? props.parentKey + "-" + props.index
    : String(props.index);
  const active =
    activeMenu === key ||
    (activeMenu && activeMenu.startsWith(key + "-")) ||
    false;
  const dispatch = useDispatch();
  const itemClick = (event, e) => {
    console.log(e);
    if (e) {
      localStorage.removeItem("item");
      const obj = {
        project_id: e.id,
        name: e.name,
        project_id_ad: e.project_id_ad,
        access_token: e.access_token,
      };
      localStorage.setItem("item", JSON.stringify(obj));
      dispatch(setToast({ ...listToast[0], detail: "Đổi dự án thành công!" }));
      dispatch(setItem(obj));
      dispatch(ToggleLoading(true));
    }
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    if (item.children) setActiveMenu(active ? props.parentKey : key);
    else setActiveMenu(key);
  };
  useEffect(() => {
    let isShow = false;
    if (item.children) {
      item.children.forEach((i) => {
        if (location.pathname.includes(i.route)) {
          isShow = true;
        }
      });
    }
    if (isShow) setActiveMenu(key);
  }, []);
  const subMenu = item.children && item.visible !== false && (
    <CSSTransition
      timeout={{ enter: 1000, exit: 450 }}
      classNames="layout-submenu"
      in={props.root ? true : active}
      key={item.name}
    >
      <ul>
        {item?.children.map((child, i) => {
          return (
            <div className="flex flex-row" style={{ position: "relative" }}>
              <div style={{ width: "100%" }}>
                <MenuSidebar
                  item={child}
                  index={i}
                  className={child.badgeClass}
                  parentKey={key}
                  key={child.name + "-" + i}
                />
              </div>
              {child.badge > 0 && (
                <div className="message_noti">{child.badge}</div>
              )}
            </div>
          );
        })}
      </ul>
    </CSSTransition>
  );

  return (
    <li
      className={classNames({
        "layout-root-menuitem": props.root,
        "active-menuitem": active,
      })}
    >
      {(!item.route || item.children) && item.visible !== false ? (
        <Link
          onClick={(e) => itemClick(e)}
          className={classNames(item.class, "p-ripple")}
          tabIndex="0"
        >
          <i className={classNames("layout-menuitem-icon", item.icon)}></i>
          <span className="layout-menuitem-text">{item.name}</span>
          {item.children && (
            <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
          )}
          <Ripple />
        </Link>
      ) : null}

      {item.route && !item.children && item.visible !== false ? (
        <Link
          to={item.route}
          replace={item.replaceUrl}
          onClick={(e) => itemClick(e, item.project)}
          className={classNames(item.class, "p-ripple", {
            "active-item":
              location.pathname.includes(item.route + "/") ||
              location.pathname === item.route,
            hr: !item.icon,
          })}
          tabIndex={0}
        >
          {!item.icon && (
            <i className="pi pi-chevron-right" style={{ fontSize: "8px" }}></i>
          )}
          <i className={classNames("layout-menuitem-icon", item.icon)}></i>
          <span
            className={classNames("layout-menuitem-text", {
              "submenu-text": !item.icon,
            })}
          >
            {item.name}
          </span>
          {item.children && (
            <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
          )}
          <Ripple />
        </Link>
      ) : null}
      {subMenu}
    </li>
  );
};

export default MenuSidebar;
