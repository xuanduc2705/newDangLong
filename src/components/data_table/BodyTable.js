import { listToast } from "@/constants";
import { setToast } from "@/redux/features";
import { Button, InputSwitch } from "@/uiCore";
import { formatNumber, removeUndefinedProps } from "@/utils";
import moment from "moment";
import { confirmDialog } from "primereact/confirmdialog";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Body = ({ data, value, key, label }) => {
  key = key || "id";
  label = label || "name";
  const item = data && data[0] ? data.find((d) => d[key] === value) : null;
  if (item)
    return item.color ? (
      <span
        className="text-center font-bold text-white text-xs"
        style={{
          backgroundColor: item.color,
          borderRadius: "4px",
          padding: "4px",
          minWidth: "100px",
          display: "inline-block",
        }}
      >
        {item[label]}
      </span>
    ) : (
      <span>{item[label]}</span>
    );
  else return "";
};

export const NumberFormat = ({ value }) => {
  if (value) {
    return (
      <span style={{ textAlign: "right !important" }}>
        {formatNumber(value)}
      </span>
    );
  } else {
    return "0";
  }
};

export const TimeBody = (value, type) => {
  if (value === "0000-00-00 00:00:00") return <Fragment>--/--/----</Fragment>;
  if (value && type === "date")
    return <Fragment>{moment(value).format("DD/MM/YYYY")}</Fragment>;
  if (value)
    return <Fragment>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</Fragment>;
};

export const StatusBody = ({ e, route, updateAction, noConfirm }) => {
  const dispatch = useDispatch();
  const permission = useSelector((state) => state.myTool).myTool;
  const [checked, setChecked] = useState(() => Boolean(e.status));

  const accept = async () => {
    const params = { id: e.id, status: checked ? 0 : 1 };
    const response = await updateAction(params);
    if (response.data.status) {
      setChecked(!checked);
      dispatch(
        setToast({ ...listToast[0], detail: "Đổi trạng thái thành công!" })
      );
    } else {
      dispatch(setToast({ ...listToast[1], detail: `${response.data.mess}` }));
    }
  };
  const confirm = () => {
    confirmDialog({
      message: "Bạn có muốn tiếp tục thay đổi trạng thái?",
      header: process.env.REACT_APP_BRANCH_NAME,
      icon: "pi pi-info-circle",
      accept,
    });
  };

  return (
    <InputSwitch
      disabled={
        !updateAction || !route || !permission.includes(route + "/update")
      }
      checked={checked}
      onChange={noConfirm ? accept : confirm}
    />
  );
};

export const StatusBodyV2 = ({
  e,
  route,
  updateAction,
  setParams = () => {},
  handleUpdate,
}) => {
  const dispatch = useDispatch();
  const permission = useSelector((state) => state.myTool).myTool;

  const accept = async () => {
    const params = handleUpdate
      ? handleUpdate(e.id, e.status)
      : { id: e.id, status: Number(e.status) };
    const response = await updateAction(params);
    if (response.data.status) {
      setParams((pre) => ({ ...pre, render: !pre.render }));
      dispatch(
        setToast({ ...listToast[0], detail: "Đổi trạng thái thành công!" })
      );
    } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }));
  };
  const confirm = () => {
    confirmDialog({
      message: "Bạn có muốn tiếp tục thay đổi trạng thái?",
      header: process.env.REACT_APP_BRANCH_NAME,
      icon: "pi pi-info-circle",
      accept,
    });
  };

  return (
    <InputSwitch
      disabled={
        !updateAction || !route || !permission.includes(route + "/update")
      }
      checked={Boolean(e.status)}
      onChange={confirm}
    />
  );
};

export const ActionBody = ({
  id,
  route,
  deleteAction = () => {},
  params,
  setParams,
  setVisibledDialog,
  handleDelete = (id) => ({ id }),
  moreActions,
  handleAfterCallApi = () => {},
  basePermissions = [],
  st,
  status,
  exchangeStatus,
}) => {
  const permission = useSelector((state) => state.myTool).myTool;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);

  async function accept() {
    const params = handleDelete(id);
    const response = await deleteAction(params);
    if (response && response.data?.status) {
      dispatch(
        setToast({ ...listToast[0], detail: "Xóa dữ liệu thành công!" })
      );
      if (params && setParams) {
        setParams((pre) => {
          return { ...pre, render: !pre.render };
        });
      }
      if (handleAfterCallApi) handleAfterCallApi(id);
    } else
      dispatch(
        setToast({ ...listToast[1], detail: response && response.data?.mess })
      );
  }

  const confirm = () => {
    confirmDialog({
      message: "Bạn có muốn tiếp tục xóa dữ liệu này?",
      header: process.env.REACT_APP_BRANCH_NAME,
      icon: "pi pi-info-circle",
      accept,
    });
  };

  useEffect(() => {
    if (params) {
      setQuery(
        "?" +
          new URLSearchParams(
            removeUndefinedProps({
              ...params,
              page: undefined,
              limit: undefined,
              render: undefined,
              first: undefined,
            })
          ).toString()
      );
    }
  }, [params]);
  return (
    <div className={st ? "gap-2 " : "gap-2 flex justify-content-center"}>
      {basePermissions.includes("detail") &&
        (setVisibledDialog ? (
          <Button
            type="button"
            onClick={() => setVisibledDialog(id)}
            icon="pi pi-eye"
            rounded
            outlined
            disabled={!route || !permission.includes(route + "/detail/:id")}
            className={st ? "mr-1" : ""}
          />
        ) : (
          <Link
            to={
              route && permission.includes(route + "/detail/:id")
                ? route + "/detail/" + id
                : ""
            }
          >
            <Button
              disabled={!route || !permission.includes(route + "/detail/:id")}
              type="button"
              icon="pi pi-eye"
              rounded
              outlined
              className={st ? "mr-1" : ""}
            />
          </Link>
        ))}
      {basePermissions.includes("delete") && (
        <Button
          type="button"
          rounded
          outlined
          icon="pi pi-trash"
          onClick={confirm}
          severity="danger"
          disabled={!route || !permission.includes(route + "/delete")}
        />
      )}
      {moreActions &&
        moreActions[0] &&
        moreActions.map((act, index) => {
          return (
            <Button
              onClick={() => act.command(id)}
              key={index}
              icon={act.icon}
              severity={act.severity || "info"}
              outlined
              rounded
              type="button"
              disabled={act.disabledCheck && act?.listDisable.includes(status)}
            />
          );
        })}
    </div>
  );
};
