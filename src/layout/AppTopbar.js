import { listToast } from "@/constants";
import { useGetParams } from "@/hooks";
import { clearUserInfo, setToast } from "@/redux/features";
import { Avatar } from "@/uiCore";
import { Menu, MenuItem } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AppTopbar = (props, ref) => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const { setVisible } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("clientId");
    window.location.reload();
    navigate("/login");
    dispatch(clearUserInfo());
    dispatch(setToast({ ...listToast[0], detail: "Đăng xuất thành công!" }));
    handleClose();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHideMenu = (e) => {
    if (anchorEl && !anchorEl.contains(e.target)) {
      handleClose();
    }
  };
  useEffect(() => {
    if (anchorEl) {
      document.addEventListener("mousedown", handleHideMenu);
    } else {
      document.removeEventListener("mousedown", handleHideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleHideMenu);
    };
  }, [anchorEl]);
  return (
    <div className="layout-topbar">
      <Link to="/" className="layout-topbar-logo">
        <div className="flex align-items-center">
          <span className="text-white text-lg">
            <b>FACEBOOK</b> CARE
          </span>
        </div>
      </Link>
      <button
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={props.onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button>

      <div className="flex gap-1 layout-topbar-menu">
        {/* <span>{userInfo && userInfo.email}</span> */}
        <div className="p-link layout-topbar-button">
          <Avatar
            className="avatar"
            onClick={handleClick}
            src={"/assets/img/profile.png"}
            alt="Ảnh đại diện"
            height="32px"
            width="32px"
            style={{ borderRadius: "50%" }}
          />
          <Menu
            style={{ marginTop: "0.5rem" }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            disableScrollLock={true}
          >
            <MenuItem
              className="m-2"
              // onClick={() => setVisible(true)}
            >
              <div style={{ minWidth: "12rem", lineHeight: "32px" }}>
                <i
                  className="pi pi-info-circle"
                  style={{ fontSize: "16px", marginRight: "16px" }}
                />
                Thông tin
              </div>
            </MenuItem>
            <MenuItem
              className="m-2"
              component={Link}
              to="/auth/change_password"
            >
              <div style={{ minWidth: "12rem", lineHeight: "32px" }}>
                <i
                  className="pi pi-sync"
                  style={{ fontSize: "16px", marginRight: "16px" }}
                />
                Đổi mật khẩu
              </div>
            </MenuItem>
            <MenuItem className="m-2" onClick={handleLogout}>
              <div style={{ minWidth: "12rem", lineHeight: "32px" }}>
                <i
                  className="pi pi-sign-out"
                  style={{ fontSize: "16px", marginRight: "16px" }}
                />
                Đăng xuất
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default AppTopbar;
