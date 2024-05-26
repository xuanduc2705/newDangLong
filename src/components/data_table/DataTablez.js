import { listToast } from "@/constants";
// import { expListTestApi } from "@/modules/accountant/vehicle_management/api";
import { setToast } from "@/redux/features";
import { Button, Column, DataTable, SplitButton } from "@/uiCore";
import { removeSpecialCharacter } from "@/utils";
import { confirmDialog } from "primereact/confirmdialog";
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ActionBody } from "./BodyTable";

export const Columnz = (props) => {
  const { ...prop } = props;
  return <Column {...prop} className="max-w-3rem" />;
};

export const RenderHeader = ({
  items,
  route,
  setVisibledDialog,
  moreOptions,
  selectedProducts,
  params,
  setParams,
  handleAfterCallApi,
  exportApi = () => {},
  title,
  setVisibleImport = () => {},
  basePermissions,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const permission = useSelector((state) => state.myTool).myTool;

  async function accept({ action, actionType, title }) {
    const response = (await action(selectedProducts)) || {};
    if (response && response.data && response.data.status) {
      dispatch(
        setToast({
          ...listToast[0],
          detail: `${actionType} ${title || "dữ liệu"} thành công!`,
        })
      );
      if (params && setParams) {
        setParams((pre) => {
          return { ...pre, render: !pre.render };
        });
      }
      if (handleAfterCallApi) handleAfterCallApi(selectedProducts);
    } else
      dispatch(
        setToast({
          ...listToast[1],
          detail: response.data && response.data.mess,
        })
      );
  }

  const confirm = ({ action, actionType, title }) => {
    if (!(selectedProducts && selectedProducts[0])) {
      dispatch(
        setToast({
          ...listToast[2],
          detail: `Vui lòng chọn ${
            title || "dữ liệu"
          } trước khi ${actionType}!`,
        })
      );
      return;
    }
    confirmDialog({
      message: `Bạn có muốn tiếp tục ${actionType} hàng loạt ${
        title || "dữ liệu"
      }?`,
      header: process.env.REACT_APP_BRANCH_NAME,
      icon: "pi pi-info-circle",
      accept: () => accept({ action, actionType, title }),
    });
  };

  const [model, setModel] = useState([]);
  useEffect(() => {
    if (items && items[0]) {
      return setModel([
        ...items.map((i) => {
          if (!i.command)
            return {
              ...i,
              command: () =>
                confirm({
                  action: i.action,
                  title: i.title,
                  actionType: i.actionType,
                }),
            };
          else return { ...i };
        }),
      ]);
    }
  }, [selectedProducts]);

  const [loading, setLoading] = useState(false);
  async function handleExport() {
    if (exportApi) {
      setLoading(true);
      const response = await exportApi({
        ...params,
        limit: undefined,
        page: undefined,
        reOrder: undefined,
      });
      if (response) setLoading(false);
      if (response.status) {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(response.data);
        downloadLink.download =
          (title && `export_${removeSpecialCharacter(title)}.xlsx`) ||
          "data.xlsx";
        downloadLink.click();
        dispatch(
          setToast({ ...listToast[0], detail: `Export ${title} thành công!` })
        );
      } else dispatch(setToast({ ...listToast[1], detail: "Có lỗi xảy ra!" }));
    }
  }
  const [loading1, setLoading1] = useState(false);

  async function handleExport1() {
    // if (exportApi) {
    //     setLoading1(true)
    //     const response = await expListTestApi({ ...params, limit: undefined, page: undefined, reOrder: undefined })
    //     if (response) setLoading1(false)
    //     if (response.status) {
    //         const downloadLink = document.createElement('a')
    //         downloadLink.href = URL.createObjectURL(response.data)
    //         downloadLink.download = (title && `export_${removeSpecialCharacter(title)}.xlsx`) || 'data.xlsx'
    //         downloadLink.click()
    //         dispatch(setToast({ ...listToast[0], detail: `Export ${title} thành công!` }))
    //     } else dispatch(setToast({ ...listToast[1], detail: 'Có lỗi xảy ra!' }))
    // }
  }

  return (
    <div className="flex flex-wrap justify-content-between gap-2 align-items-center">
      <div className="flex gap-2">
        {model && model[0] && (
          <SplitButton model={model} label="Tác vụ" severity="info" raised />
        )}
        {basePermissions.includes("insert") &&
          (setVisibledDialog ? (
            <Button
              disabled={!route || !permission.includes(route + "/insert")}
              onClick={() => setVisibledDialog(true)}
              icon="pi pi-plus"
              label="Thêm mới"
              size="small"
              severity="info"
              raised
              type="button"
            />
          ) : (
            <Link
              to={
                route && permission.includes(route + "/insert")
                  ? route + "/insert"
                  : ""
              }
            >
              <Button
                disabled={!route || !permission.includes(route + "/insert")}
                icon="pi pi-plus"
                label="Thêm mới"
                size="small"
                severity="info"
                raised
                type="button"
              />
            </Link>
          ))}
        {basePermissions.includes("import") && (
          <Button
            disabled={!route || !permission.includes(route + "/import")}
            icon="pi pi-upload"
            onClick={setVisibleImport ? () => setVisibleImport(true) : () => {}}
            label="Import"
            size="small"
            severity="success"
            raised
            type="button"
          />
        )}
        {basePermissions.includes("export") && (
          <Button
            disabled={!route || !permission.includes(route + "/export")}
            icon="pi pi-download"
            loading={loading}
            onClick={handleExport}
            label="Export"
            size="small"
            severity="success"
            raised
            type="button"
          />
        )}
        {basePermissions.includes("export1") && (
          <Button
            disabled={!route || !permission.includes(route + "/export")}
            icon="pi pi-download"
            loading={loading1}
            onClick={handleExport1}
            label="Báo cáo tổng hợp phương tiện"
            size="small"
            severity="success"
            raised
            type="button"
          />
        )}
        {moreOptions &&
          moreOptions[0] &&
          moreOptions.map((ops, index) => {
            if (!ops.type) {
              return (
                <Button
                  onClick={() => ops.command()}
                  key={index}
                  icon={ops.icon}
                  label={ops.label || "Export"}
                  size="small"
                  severity={ops.severity || "info"}
                  raised
                  loading={ops.loading}
                />
              );
            } else {
              const model = ops.items.map((i) => {
                if (!i.command)
                  return {
                    ...i,
                    command: () =>
                      confirm({
                        action: i.action,
                        title: i.title,
                        actionType: i.actionType,
                      }),
                  };
                else return { ...i };
              });
              return (
                <SplitButton
                  key={index}
                  model={model}
                  label={ops.type}
                  severity={ops.serverity}
                  raised
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export const DataTablez = memo((props) => {
  const {
    params,
    setParams,
    totalRecords,
    title,
    dataKey,
    selectedProducts,
    setSelectedProducts,
    route,
    setVisibledDialog,
    headerInfo,
    actionsInfo,
    hideParams,
    handleAfterCallApi,
    noStt,
    basePermissions = [],
    loading = true,
    headerStyle,
    styleColumn,
    rowsPerPageOptions,
    checkStatus = "status",
    ...prop
  } = props;
  const { items, moreOptions, exportApi, setVisibleImport } = headerInfo || {};
  const { deleteAction, noDialog, handleDelete, moreActions } =
    actionsInfo || {};
  const [loadingz, setLoadingz] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onPage = (event) => {
    setParams({
      ...params,
      first: event.first,
      limit: event.rows,
      page: event.page !== 0 ? event.page + 1 : 1,
    });
  };

  const timeoutRef = useRef();
  useEffect(() => {
    loadLazyData();
  }, [params]);

  useEffect(() => {
    setLoadingz(loading);
  }, [loading]);

  const loadLazyData = () => {
    setLoadingz(true);
    timeoutRef.current = setTimeout(() => {
      setLoadingz(false);
    }, 1500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  };

  useEffect(() => {
    if (hideParams) return;
    const query = {};
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key];
        if (Array.isArray(value) && !value[0]) {
        } else if (
          !["rows", "render", "first"].includes(key) &&
          !["", undefined, null].includes(value)
        )
          query[key] = value;
        if (["page", "limit"].includes(key)) {
          query[key] = value;
        }
      }
    }
    navigate(location.pathname + "?" + new URLSearchParams(query).toString());
    if (setSelectedProducts) setSelectedProducts([]);
  }, [JSON.stringify(params)]);

  return (
    <DataTable
      lazy
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      paginator
      rowHover
      header={
        headerInfo &&
        RenderHeader({
          route,
          setVisibledDialog,
          selectedProducts,
          items,
          moreOptions,
          params,
          setParams,
          handleAfterCallApi,
          exportApi,
          title,
          setVisibleImport,
          basePermissions,
        })
      }
      first={params.first}
      rows={params.limit}
      totalRecords={totalRecords}
      rowsPerPageOptions={
        rowsPerPageOptions ? rowsPerPageOptions : [10, 20, 50, 100, 200, 500]
      }
      onPage={onPage}
      dataKey={dataKey ? dataKey : "id"}
      loading={loadingz}
      showGridlines
      stripedRows
      scrollable
      emptyMessage={"Không tìm thấy " + title}
      currentPageReportTemplate="Tổng số: {totalRecords} bản ghi"
      selection={selectedProducts}
      selectionMode="checkbox"
      onSelectionChange={(e) => {
        if (setSelectedProducts) setSelectedProducts(e.value);
      }}
      {...prop}
    >
      {selectedProducts && setSelectedProducts && (
        <Columnz
          style={styleColumn}
          selectionMode="multiple"
          headerStyle={{
            width: "40px",
            minWidth: "40px",
            textAlign: "center",
            ...headerStyle,
          }}
          bodyStyle={{ width: "40px", minWidth: "40px", textAlign: "center" }}
        />
      )}
      {!noStt && (
        <Columnz
          style={styleColumn}
          header="STT"
          frozen
          body={(data, options) => options.rowIndex + 1}
          headerStyle={{ width: "40px", minWidth: "40px", ...headerStyle }}
          bodyStyle={{ width: "40px", minWidth: "40px", textAlign: "center" }}
        />
      )}
      {props.children}
      {actionsInfo && (
        <Columnz
          headerStyle={{ padding: "auto", textAlign: "center" }}
          header="Thao tác"
          body={(e) =>
            ActionBody({
              route,
              params,
              setParams,
              id: dataKey ? e[dataKey] : e.id,
              deleteAction,
              setVisibledDialog: noDialog ? undefined : setVisibledDialog,
              handleDelete,
              moreActions,
              handleAfterCallApi,
              basePermissions,
              status: e[checkStatus],
            })
          }
        />
      )}
    </DataTable>
  );
});

export const DataTablezV2 = (props) => {
  const {
    data = [],
    title,
    dataKey,
    handleDelete,
    deleteAction,
    setData,
    noStt,
    sttWithBill,
    ...prop
  } = props;
  const dispatch = useDispatch();

  async function accept(id) {
    const params = handleDelete ? handleDelete(id) : { id };
    const response = await deleteAction(params);
    if (response.data.status) {
      dispatch(
        setToast({ ...listToast[0], detail: "Xóa dữ liệu thành công!" })
      );
      if (setData) setData(id);
    } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }));
  }

  const confirm = (id) => {
    confirmDialog({
      message: "Bạn có muốn tiếp tục xóa dữ liệu này?",
      header: process.env.REACT_APP_BRANCH_NAME,
      icon: "pi pi-info-circle",
      accept: () => accept(id),
    });
  };

  const ActionBody = (id) => {
    return (
      <Button
        type="button"
        rounded
        outlined
        icon="pi pi-trash"
        onClick={() => confirm(id)}
        severity="danger"
      />
    );
  };

  return (
    <DataTable
      value={data}
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      paginator
      first="0"
      rows="100"
      currentPageReportTemplate="Tổng số: {totalRecords} bản ghi"
      totalRecords={data ? data.length : 0}
      dataKey={dataKey ? dataKey : "id"}
      stripedRows
      showGridlines
      emptyMessage={"Không tìm thấy " + title}
      {...prop}
    >
      {!noStt && (
        <Columnz
          header="STT"
          body={(data, options) => Number(options.rowIndex) + 1}
          bodyStyle={{ width: "40px", minWidth: "40px", textAlign: "center" }}
          headerStyle={{ width: "40px", minWidth: "40px" }}
        />
      )}
      {sttWithBill && (
        <Columnz
          header="STT"
          body={(data, options) => Number(options.rowIndex) + 1}
          bodyStyle={{ width: "40px", minWidth: "40px", textAlign: "center" }}
          headerStyle={{ width: "40px", minWidth: "40px" }}
          className="text-lg"
        />
      )}
      {props.children}
      {deleteAction && (
        <Columnz
          headerStyle={{ padding: "auto", textAlign: "center" }}
          header="Actions"
          body={(e) => ActionBody(e.id)}
        />
      )}
    </DataTable>
  );
};

export const DataTablezV3 = memo((props) => {
  const {
    loading,
    params,
    setParams,
    totalRecords,
    title,
    dataKey,
    selectedProducts,
    setSelectedProducts,
    route,
    setVisibledDialog,
    headerInfo,
    actionsInfo,
    hideParams,
    handleAfterCallApi,
    noStt,
    basePermissions = [],
    ...prop
  } = props;
  const { items, moreOptions, exportApi, setVisibleImport } = headerInfo || {};
  const { deleteAction, noDialog, handleDelete, moreActions } =
    actionsInfo || {};
  const location = useLocation();
  const navigate = useNavigate();

  const onPage = (event) => {
    setParams({
      ...params,
      first: event.first,
      limit: event.rows,
      page: event.page !== 0 ? event.page + 1 : 1,
    });
  };
  // useEffect(() => {
  //     const rows = document.querySelectorAll('.p-datatable tbody tr');
  //     rows.forEach(row => {
  //         const cells = row.querySelectorAll('td');
  //         cells.forEach((cell, index) => {
  //             const content = cell.textContent.trim();
  //             if (Number(content) && index !== 0) {
  //                 cell.textContent = parseFloat(content).toLocaleString('en-US', { maximumFractionDigits: 2 });
  //                 cell.style.textAlign = 'right';
  //             } else if (index === 0) {
  //                 cell.style.textAlign = 'center'
  //             }
  //         });
  //     });
  // }, [props.loading]);
  useEffect(() => {
    if (hideParams) return;
    const query = {};
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key];
        if (Array.isArray(value) && !value[0]) {
        } else if (
          !["rows", "render", "first"].includes(key) &&
          !["", undefined, null].includes(value)
        )
          query[key] = value;
        if (["page", "limit"].includes(key)) {
          query[key] = value;
        }
      }
    }
    navigate(location.pathname + "?" + new URLSearchParams(query).toString());
    if (setSelectedProducts) setSelectedProducts([]);
  }, [JSON.stringify(params)]);

  return (
    <DataTable
      lazy
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      paginator
      rowHover
      header={
        headerInfo &&
        RenderHeader({
          route,
          setVisibledDialog,
          selectedProducts,
          items,
          moreOptions,
          params,
          setParams,
          handleAfterCallApi,
          exportApi,
          title,
          setVisibleImport,
          basePermissions,
        })
      }
      first={params.first}
      rows={params.limit}
      totalRecords={totalRecords}
      rowsPerPageOptions={[10, 20, 50, 100, 200, 500]}
      onPage={onPage}
      dataKey={dataKey ? dataKey : "id"}
      loading={loading}
      showGridlines
      stripedRows
      emptyMessage={"Không tìm thấy " + title}
      currentPageReportTemplate="Tổng số: {totalRecords} bản ghi"
      selection={selectedProducts}
      selectionMode="checkbox"
      onSelectionChange={(e) => {
        if (setSelectedProducts) setSelectedProducts(e.value);
      }}
      {...prop}
    >
      {selectedProducts && setSelectedProducts && (
        <Columnz
          selectionMode="multiple"
          headerStyle={{
            width: "40px",
            minWidth: "40px",
            padding: "auto",
            textAlign: "center",
          }}
          bodyStyle={{ width: "40px", minWidth: "40px", textAlign: "center" }}
        />
      )}
      {!noStt && (
        <Columnz
          header="STT"
          body={(data, options) => options.rowIndex + 1}
          headerStyle={{ width: "40px", minWidth: "40px" }}
          bodyStyle={{ width: "40px", minWidth: "40px", textAlign: "center" }}
        />
      )}
      {props.children}
      {actionsInfo && (
        <Columnz
          headerStyle={{ padding: "auto", textAlign: "center" }}
          header="Thao tác"
          body={(e) =>
            ActionBody({
              route,
              params,
              setParams,
              id: dataKey ? e[dataKey] : e.id,
              deleteAction,
              setVisibledDialog: noDialog ? undefined : setVisibledDialog,
              handleDelete,
              moreActions,
              handleAfterCallApi,
              basePermissions,
            })
          }
        />
      )}
    </DataTable>
  );
});
