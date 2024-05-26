import { getMessageFormat, listToast, REGEX } from "@/constants";
import { setToast } from "@/redux/features/toast";
import {
  Button,
  Calendar,
  Dropdown,
  InputSwitch,
  InputText,
  InputTextarea,
  MultiSelect,
} from "@/uiCore";
import { formatNumber } from "@/utils";
import { classNames } from "primereact/utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialogz } from "./Dialogz";

export const CalendarForm = (props) => {
  const { id, label, className, ...inputprop } = props;
  return (
    <div className="mb-3 px-2 change-disabled">
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}
      <Calendar
        inputId={id}
        dateFormat="dd/mm/yy"
        showIcon
        showButtonBar
        className={classNames("w-full mt-2", className)}
        hourFormat="24"
        placeholder={label && `Chọn ${label.toLowerCase()}`}
        style={{ minHeight: "50px" }}
        {...inputprop}
      />
    </div>
  );
};

export const InputTextareaForm = (props) => {
  const { id, label, className, ...inputprop } = props;
  return (
    <div className="mb-3 px-2 change-disabled">
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}
      <InputTextarea
        autoResize
        id={id}
        rows={6}
        cols={30}
        className={classNames("w-full mt-2", className)}
        placeholder={`Nhập ${label && label.toLowerCase()}`}
        {...inputprop}
      />
    </div>
  );
};

export const InputNumberForm = (props) => {
  const { value, handleOnChange, ...prop } = props;
  const onChange = (e) => {
    let v = e.target.value;
    if (!v) {
      handleOnChange("");
      return;
    }
    let result = "";
    if (v == 0 && !result) {
      handleOnChange(0);
    } else if (v) {
      for (let i = 0; i < v.length; i++) {
        if (!isNaN(v[i])) {
          result += v[i];
        }
      }
      if (Number(result)) handleOnChange(Number(result));
    }
  };
  return (
    <InputForm
      value={value === 0 ? 0 : formatNumber(value) || ""}
      onChange={onChange}
      {...prop}
      style={{ minHeight: "50px" }}
    />
  );
};

export const InputVehicleNumberForm = (props) => {
  const { value, handleOnChange, ...prop } = props;
  const onChange = (e) => {
    let v = e.target.value;
    if (!v) {
      handleOnChange("");
      return;
    }
    let result = "";
    for (let i = 0; i < v.length; i++) {
      if (REGEX.VEHICLE.test(v[i])) {
        result += v[i];
      }
    }
    if (REGEX.VEHICLE.test(result))
      handleOnChange(result ? result.toUpperCase() : "");
  };
  return (
    <InputForm
      value={value}
      onChange={onChange}
      {...prop}
      style={{ minHeight: "50px" }}
    />
  );
};

export const InputNumberFormV2 = (props) => {
  const { value, handleOnChange = () => {}, ...prop } = props;
  const onChange = (e) => {
    let v = e.target.value;
    if (!v) {
      handleOnChange("");
      return;
    }
    let result = "";
    if (v === 0 && !result) {
      handleOnChange(0);
    } else if (v) {
      for (let i = 0; i < v.length; i++) {
        if (REGEX.decimalRegex.test(v[i])) {
          result += v[i];
        }
      }
      handleOnChange(result);
    }
  };
  return (
    <InputForm
      value={value === 0 ? 0 : value || ""}
      onChange={onChange}
      {...prop}
      style={{ minHeight: "50px" }}
    />
  );
};

export const InputSwitchForm = (props) => {
  const { id, label, className, ...inputprop } = props;
  return (
    <div className="mb-3 px-2">
      <label htmlFor={id} className="font-medium">
        {label ? label : "Trạng thái"}
      </label>
      <div
        className="w-full mt-2 align-items-center flex"
        style={{ minHeight: "50px", lineHeight: "50px" }}
      >
        <InputSwitch inputId={id} className={className} {...inputprop} />
      </div>
    </div>
  );
};

export const InputForm = (props) => {
  const {
    label,
    id,
    placeholder,
    type,
    className,
    required,
    onChange,
    value = "",
    ...inputprop
  } = props;
  const [error, setError] = useState(false);

  const handleValidate = (e) => {
    const value = e.target.value;
    if (required) {
      if (!value) {
        setError(getMessageFormat());
        return;
      } else if (REGEX[type] ? !REGEX[type].test(value) : false) {
        setError(getMessageFormat(type));
        return;
      }
    }
  };

  const handleOnChange = (e) => {
    if (!e) {
      onChange({ target: { value: "" } });
      return;
    }
    let v = e.target.value;
    if (!v) {
      handleOnChange("");
      return;
    }
    let result = "";
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (Number(v[i]) || Number(v[i]) === 0) {
          result += v[i];
        }
      }
      result = { target: { value: result } };
      onChange(result);
    }
  };

  const setFocus = () => {
    setError(false);
  };

  return (
    <div className="mb-3 px-2 change-disabled">
      {label && (
        <div className="w-full flex justify-content-between">
          <label htmlFor={id} className="font-medium w-full">
            {label}
          </label>
        </div>
      )}
      <InputText
        id={id}
        className={classNames(
          "w-full mt-2",
          { "p-invalid": required && error },
          className
        )}
        placeholder={placeholder || (label && `Nhập ${label.toLowerCase()}`)}
        onBlur={handleValidate}
        onInput={required && setFocus}
        required={required}
        pattern={
          required
            ? type === "password"
              ? undefined
              : type === "phone"
              ? "0[1-9]{1}[0-9]{8}"
              : REGEX[type]
            : undefined
        }
        value={value}
        type={type}
        onChange={
          type === "phone" ? (e) => handleOnChange(e) : (e) => onChange(e)
        }
        style={{ minHeight: "50px" }}
        {...inputprop}
      />
      {required && error && (
        <div className="mt-1">
          <span className="p-error w-full text-right text-sm ml-3">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};
export const InputFormV2 = (props) => {
  const {
    label,
    id,
    placeholder,
    type,
    className,
    required,
    onChange,
    value = "",
    ...inputprop
  } = props;
  const [error, setError] = useState(false);

  const handleValidate = (e) => {
    const value = e.target.value;
    if (required) {
      if (!value) {
        setError(getMessageFormat());
        return;
      } else if (REGEX[type] ? !REGEX[type].test(value) : false) {
        setError(getMessageFormat(type));
        return;
      }
    }
  };

  const handleOnChange = (e) => {
    if (!e) {
      onChange({ target: { value: "" } });
      return;
    }
    let v = e.target.value;
    if (!v) {
      handleOnChange("");
      return;
    }
    let result = "";
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (Number(v[i]) || Number(v[i]) === 0) {
          result += v[i];
        }
      }
      result = { target: { value: result } };
      onChange(result);
    }
  };

  const setFocus = () => {
    setError(false);
  };

  return (
    <span className="mb-3 px-2 change-disabled w-full">
      <InputText
        id={id}
        className={classNames(
          "w-full mt-2",
          { "p-invalid": required && error },
          className
        )}
        placeholder={placeholder || (label && `Nhập ${label.toLowerCase()}`)}
        onBlur={handleValidate}
        onInput={required && setFocus}
        required={required}
        pattern={
          required
            ? type === "password"
              ? undefined
              : type === "phone"
              ? "0[1-9]{1}[0-9]{8}"
              : REGEX[type]
            : undefined
        }
        value={value}
        type={type}
        onChange={
          type === "phone" ? (e) => handleOnChange(e) : (e) => onChange(e)
        }
        style={{ minHeight: "50px" }}
        {...inputprop}
      />
      {required && error && (
        <div className="mt-1">
          <span className="p-error w-full text-right text-sm ml-3">
            {error}
          </span>
        </div>
      )}
    </span>
  );
};
export const MultiSelectForm = (props) => {
  const {
    id,
    label,
    optionLabel,
    optionValue,
    placeholder,
    className,
    options,
    ...inputprop
  } = props;
  return (
    <div className="mb-3 px-2 change-disabled">
      {label && (
        <label htmlFor={id} className="mt-3 font-medium w-5">
          {label}
        </label>
      )}
      {options && options[0] ? (
        <MultiSelect
          inputId={id}
          filter
          display="chip"
          className={classNames("w-full mt-2", className)}
          optionLabel={optionLabel ? optionLabel : "name"}
          optionValue={optionValue ? optionValue : "id"}
          options={options && options[0] ? options : []}
          placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
          style={{ lineHeight: "34px" }}
          {...inputprop}
        />
      ) : (
        <MultiSelect
          inputId={id}
          filter
          className={classNames("w-full mt-2", className)}
          placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
          style={{ lineHeight: "34px" }}
          {...inputprop}
        />
      )}
    </div>
  );
};

export const DropdownForm = (props) => {
  const {
    id,
    label,
    optionLabel,
    optionValue,
    placeholder,
    className,
    ...inputprop
  } = props;
  return (
    <div className="mb-3 px-2 change-disabled">
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}
      <Dropdown
        filter
        inputId={id}
        className={classNames("w-full mt-2", className)}
        optionLabel={optionLabel ? optionLabel : "name"}
        optionValue={optionValue ? optionValue : "id"}
        placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
        style={{ lineHeight: "34px" }}
        {...inputprop}
      />
    </div>
  );
};
export const DropdownFormV2 = (props) => {
  const {
    id,
    label,
    optionLabel,
    optionValue,
    placeholder,
    className,
    ...inputprop
  } = props;
  return (
    <div className="mb-3 px-2 change-disabled">
      <div className="grid grid-form">
        <div className="col-12 lg:col-3 flex">
          {label && (
            <label
              htmlFor={id}
              className="font-medium flex align-items-center justify-content-center"
            >
              {label}
            </label>
          )}
        </div>
        <div className="col-12 lg:col-9">
          <Dropdown
            filter
            inputId={id}
            className={classNames("w-full", className)}
            optionLabel={optionLabel ? optionLabel : "name"}
            optionValue={optionValue ? optionValue : "id"}
            placeholder={
              placeholder || (label && `Chọn ${label.toLowerCase()}`)
            }
            style={{ lineHeight: "34px" }}
            {...inputprop}
          />
        </div>
      </div>
    </div>
  );
};
export const DropdownFormV3 = (props) => {
  const {
    id,
    label,
    optionLabel,
    optionValue,
    placeholder,
    className,
    ...inputprop
  } = props;
  return (
    <div className="mb-3 px-2 change-disabled">
      <div className="grid grid-form">
        <div className="col-12 lg:col-2 flex">
          {label && (
            <label
              htmlFor={id}
              className="font-medium flex align-items-center justify-content-center"
            >
              {label}
            </label>
          )}
        </div>
        <div className="col-12 lg:col-10">
          <Dropdown
            filter
            inputId={id}
            className={classNames("w-full", className)}
            optionLabel={optionLabel ? optionLabel : "name"}
            optionValue={optionValue ? optionValue : "id"}
            placeholder={
              placeholder || (label && `Chọn ${label.toLowerCase()}`)
            }
            style={{ lineHeight: "34px" }}
            {...inputprop}
          />
        </div>
      </div>
    </div>
  );
};
export const FormUpdate = (props) => {
  const {
    checkId,
    title,
    handleData,
    actions,
    className,
    route,
    refreshObjects,
    setVisible,
    setResident,
    setParams,
    handleAfterCallApi,
    disabled,
    handleSubmit,
    ...prop
  } = props;
  const permission = useSelector((state) => state.myTool).myTool;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(() => {
    return location.search;
  });
  async function fetchDataSubmit(info) {
    if (checkId) {
      const response = await actions.update(info);
      if (response) setLoading(false);
      if (response.status) {
        if (route) navigate(route + query);
        if (setParams) {
          setParams((pre) => {
            return { ...pre, render: !pre.render };
          });
        }
        if (handleAfterCallApi) handleAfterCallApi();
        if (setVisible) setVisible((pre) => !pre);
        dispatch(
          setToast({
            ...listToast[0],
            detail: `Cập nhật ${title || "dữ liệu"} thành công!`,
          })
        );
      } else
        dispatch(setToast({ ...listToast[1], detail: response.data.mess }));
    } else {
      const response = await actions.add(info);
      if (response) setLoading(false);
      if (response.data.status) {
        if (route) navigate(route + query);
        if (setParams) {
          setParams((pre) => {
            return { ...pre, render: !pre.render };
          });
        }
        if (handleAfterCallApi) handleAfterCallApi();
        if (setVisible) setVisible((pre) => !pre);
        dispatch(
          setToast({
            ...listToast[0],
            detail: `Thêm ${title || "dữ liệu"} thành công!`,
          })
        );
      } else
        dispatch(setToast({ ...listToast[1], detail: response.data.mess }));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const info = handleData(e);
    if (typeof info === "string") {
      setLoading(false);
      if (info) dispatch(setToast({ ...listToast[1], detail: info }));
    } else {
      fetchDataSubmit(info);
    }
  };

  return (
    <div className={classNames({ card: !setVisible }, className)} {...prop}>
      <form onSubmit={onSubmit}>
        {title && (
          <div
            className="font-left flex align-items-center mb-4"
            style={{ height: "50px", borderBottom: "2px solid #dee2e6" }}
          >
            <b className="text-xl p-0">
              {checkId ? "Chi tiết" : "Thêm mới"} {title}
            </b>
          </div>
        )}
        {props.children}
        <div className="justify-content-end flex gap-3">
          {route || setVisible ? (
            <Button
              type="button"
              raised
              size="small"
              severity="danger"
              icon={setVisible ? "pi pi-times" : ""}
              label={setVisible ? "Hủy" : "Trở về"}
              onClick={() => {
                if (route && !setVisible) {
                  if (query && !setVisible) navigate(route + query);
                  else navigate(-1);
                } else {
                  setVisible(false);
                }
              }}
            />
          ) : (
            ""
          )}
          {(route || setVisible) && actions && (
            <Button
              type="submit"
              raised
              loading={loading}
              size="small"
              icon="pi pi-save"
              severity="info"
              disabled={
                disabled
                  ? disabled
                  : route
                  ? checkId
                    ? !permission.includes(route + "/update")
                    : !permission.includes(route + "/insert")
                  : true && !setVisible
              }
              label={
                setVisible ? "Xác nhận" : checkId ? "Cập nhật" : "Thêm mới"
              }
            />
          )}
        </div>
      </form>
    </div>
  );
};

export const FormUpdateDialog = (props) => {
  const { title, visible, setVisible, onHide, ...prop } = props;
  return (
    Boolean(visible) && (
      <Dialogz
        title={title}
        visible={Boolean(visible)}
        onHide={onHide}
        setVisible={setVisible}
        width="1200px"
      >
        <FormUpdate
          setVisible={setVisible}
          checkId={typeof visible === "number" || typeof visible === "string"}
          {...prop}
        >
          <div className="card mt-4">{props.children}</div>
        </FormUpdate>
      </Dialogz>
    )
  );
};
