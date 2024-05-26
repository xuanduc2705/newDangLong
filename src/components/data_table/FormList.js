import { InputText, Dropdown, Button, Calendar, MultiSelect } from "@/uiCore";
import { refreshObject, refreshObjectv2 } from "@/utils";
import { classNames } from "primereact/utils";
import { useLocation } from "react-router-dom";
import { removeUndefinedProps } from "@/utils";
import { databaseDate } from "@/lib";
import { useEffect } from "react";

export const Calendarz = (props) => {
  const { className, ...inputprop } = props;
  return (
    <div className={classNames("col-12 md:col-6 lg:col-3", className)}>
      <Calendar
        showIcon
        readOnlyInput
        showButtonBar
        dateFormat="dd/mm/yy"
        selectionMode="range"
        placeholder="Chọn khoảng thời gian"
        className="w-full"
        style={{ minHeight: "50px" }}
        {...inputprop}
      />
    </div>
  );
};

export const MultiSelectz = (props) => {
  const {
    value,
    optionLabel = "name",
    optionValue = "id",
    className,
    ...inputprop
  } = props;
  return (
    <div className={classNames("col-12 md:col-6 lg:col-3", className)}>
      <MultiSelect
        value={value}
        filter
        display="chip"
        optionValue={optionValue}
        optionLabel={optionLabel}
        className="w-full"
        style={{ lineHeight: "34px" }}
        {...inputprop}
      />
    </div>
  );
};

export const Inputz = (props) => {
  const { id, value = "", placeholder, className, ...inputprop } = props;
  return (
    <div className={classNames("col-12 md:col-6 lg:col-3", className)}>
      <InputText
        value={value}
        id={id}
        placeholder={placeholder ? placeholder : "Tìm kiếm theo tên ..."}
        className="w-full"
        style={{ minHeight: "50px" }}
        {...inputprop}
      />
    </div>
  );
};

export const Dropdownz = (props) => {
  const { optionLabel, optionValue, className, ...inputprop } = props;
  return (
    <div className={classNames("col-12 md:col-6 lg:col-3", className)}>
      <Dropdown
        filter
        className="w-full"
        optionLabel={optionLabel ? optionLabel : "name"}
        optionValue={optionValue ? optionValue : "id"}
        style={{ lineHeight: "34px" }}
        {...inputprop}
      />
    </div>
  );
};

export const HeaderListForm = ({ title, SubTitle }) => {
  return (
    <div
      className="header__list-form flex align-items-center mb-4 justify-content-between"
      style={{ height: "50px", borderBottom: "2px solid #dee2e6" }}
    >
      <b className="text-xl p-0">{title}</b>
      {SubTitle && <SubTitle />}
    </div>
  );
};

export const GridForm = (props) => {
  const {
    className,
    setParams = () => {},
    filter,
    setFilter,
    handleFilter,
    array = [],
    onClear,
    hideParams,
  } = props;
  const location = useLocation();

  const handleClear = () => {
    setParams((pre) => {
      return {
        page: pre.page || 1,
        limit: pre.limit || 20,
        first: pre.first || 0,
        render: pre.render,
      };
    });
    setFilter({ ...refreshObject(filter) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filters = { ...filter };
    if (filters.dates && filters.dates[0]) {
      filters.from = databaseDate(filter.dates[0]);
      filters.to = filter.dates[1]
        ? databaseDate(filter.dates[1], true)
        : databaseDate(filter.dates[0], true);
      filters.dates = undefined;
    }
    if (filters.datez && filters.datez[0]) {
      filters.from_create = databaseDate(filter.datez[0]);
      filters.to_create = filter.datez[1]
        ? databaseDate(filter.datez[1], true)
        : databaseDate(filter.datez[0], true);
      filters.datez = undefined;
    }
    if (filters.dateq && filters.dateq[0]) {
      filters.start = databaseDate(filter.dateq[0], false, "date");
      filters.end = filter.dateq[1]
        ? databaseDate(filter.dateq[1], false, "date")
        : databaseDate(filter.dateq[0], false, "date");
      filters.dateq = undefined;
    }
    if (handleFilter) filters = handleFilter(filter);
    setParams((pre) => {
      return {
        page: pre.page || 1,
        limit: pre.limit || 20,
        first: pre.first || 0,
        render: pre.render,
        ...removeUndefinedProps(filters),
      };
    });
  };

  useEffect(() => {
    if (hideParams) return;
    const query = {};
    const queryParams = new URLSearchParams(location.search);
    const dates = [];
    const datez = [];
    const dateq = [];
    for (let [key, value] of queryParams.entries()) {
      if (key === "from" || key === "to") {
        if (key === "from") {
          dates[0] = new Date(value);
        }
        if (key === "to") {
          dates[1] = new Date(value);
        }
      } else if (key === "from_create" || key === "to_create") {
        if (key === "from_create") {
          datez[0] = new Date(value);
        }
        if (key === "to_create") {
          datez[1] = new Date(value);
        }
      } else if (key === "start" || key === "end") {
        if (key === "start") {
          dateq[0] = new Date(value);
        }
        if (key === "end") {
          dateq[1] = new Date(value);
        }
      } else {
        if (array.includes(key)) {
          const data = value.split(",") || [];
          query[key] = data.map((d) => Number(d) || d);
        } else
          query[key] = value === "0" || Number(value) ? Number(value) : value;
      }
    }
    if (dates && dates[0]) query["dates"] = dates;
    if (datez && datez[0]) query["datez"] = datez;
    setFilter({ ...filter, ...query });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="grid form-grid align-item-center">
      {props.children}
      <div
        className={classNames(
          "mb-4 col-12 md:col-12 lg:col-3 flex justify-content-end gap-3",
          className
        )}
      >
        <Button
          type="button"
          raised
          size="small"
          severity="secondary"
          label="Làm mới"
          onClick={() => (onClear ? onClear() : handleClear())}
        />
        <Button
          type="submit"
          raised
          size="small"
          label="Lọc"
          severity="info"
          icon="pi pi-filter"
        />
      </div>
    </form>
  );
};
export const GridFormV2 = (props) => {
  const {
    className,
    setParams = () => {},
    filter,
    setFilter,
    handleFilter,
    array = [],
  } = props;
  const location = useLocation();

  const handleClear = () => {
    setParams((pre) => {
      return {
        page: pre.page || 1,
        limit: pre.limit || 20,
        first: pre.first || 0,
        render: pre.render,
      };
    });
    setFilter({ ...refreshObjectv2(filter) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filters = { ...filter };
    if (filters.dates && filters.dates[0]) {
      filters.from = databaseDate(filter.dates[0]);
      filters.to = filter.dates[1]
        ? databaseDate(filter.dates[1], true)
        : databaseDate(filter.dates[0], true);
      filters.dates = undefined;
    }
    if (filters.datez && filters.datez[0]) {
      filters.from_create = databaseDate(filter.datez[0]);
      filters.to_create = filter.datez[1]
        ? databaseDate(filter.datez[1], true)
        : databaseDate(filter.datez[0], true);
      filters.datez = undefined;
    }
    if (handleFilter) filters = handleFilter(filter);
    setParams((pre) => {
      return {
        page: pre.page || 1,
        limit: pre.limit || 20,
        first: pre.first || 0,
        render: pre.render,
        ...removeUndefinedProps(filters),
      };
    });
  };

  useEffect(() => {
    const query = {};
    const queryParams = new URLSearchParams(location.search);
    const dates = [];
    const datez = [];
    for (let [key, value] of queryParams.entries()) {
      if (key === "from" || key === "to") {
        if (key === "from") {
          dates[0] = new Date(value);
        }
        if (key === "to") {
          dates[1] = new Date(value);
        }
      } else if (key === "from_create" || key === "to_create") {
        if (key === "from_create") {
          datez[0] = new Date(value);
        }
        if (key === "to_create") {
          datez[1] = new Date(value);
        }
      } else {
        if (array.includes(key)) {
          const data = value.split(",") || [];
          query[key] = data.map((d) => Number(d) || d);
        } else
          query[key] = value === "0" || Number(value) ? Number(value) : value;
      }
    }
    if (dates && dates[0]) query["dates"] = dates;
    if (datez && datez[0]) query["datez"] = datez;
    setFilter({ ...filter, ...query });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="grid formgrid">
      {props.children}
      <div
        className={classNames(
          "mb-4 col-12 md:col-12 lg:col-3 flex justify-content-end gap-3",
          className
        )}
      >
        <Button
          type="button"
          raised
          size="small"
          severity="secondary"
          label="Làm mới"
          onClick={() => handleClear()}
        />
        <Button
          type="submit"
          raised
          size="small"
          label="Lọc"
          severity="info"
          icon="pi pi-filter"
        />
      </div>
    </form>
  );
};
export const Calendarm = (props) => {
  const { className, ...inputprop } = props;
  return (
    <div className={classNames("col-12 mb-3 md:col-6 lg:col-3", className)}>
      <Calendar
        showIcon
        readOnlyInput
        showButtonBar
        dateFormat="mm/yy"
        placeholder="Chọn tháng"
        className="w-full"
        style={{ minHeight: "50px" }}
        view="month"
        monthNavigator
        {...inputprop}
      />
    </div>
  );
};
