import { useState } from "react";
import { useCountListLead, useListDepartment, useListLead } from "../utils";
import { useGetParams } from "../../../hooks/useGetParams";
import { Columnz, DataTablez } from "@/components/data_table";
import { HeaderListForm } from "@/components/data_table/FormList";
import { setToast } from "@/redux/features";
import { listToast } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import DivideDialog from "./DivideDialog";
import { updatedata } from "../api";
import SelectDay from "./SelectDay";
const Divide = () => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const dispatch = useDispatch();
  const project = JSON.parse(localStorage.getItem("item"));
  const list_lead = useListLead({
    status: undefined,
    ...params,
    first: undefined,
    project_id: project?.project_id,
  });
  const list_department = useListDepartment({
    status: undefined,
  });
  const ParseDepartment = (id) => {
    const result = list_department
      ?.filter((e) => e.gb_id == id)
      .map((e) => e.gb_title)[0];
    return <span>{result ? result : "CHƯA CÓ PHÒNG BAN"}</span>;
  };
  const checkSelected = () => {
    if (!(selectedProducts && selectedProducts[0])) {
      dispatch(
        setToast({
          ...listToast[1],
          detail: "Vui lòng chọn khách hàng trước khi duyệt!",
        })
      );
      return;
    }
    setVisible(true);
  };
  const [visible, setVisible] = useState(false);
  const [dayVisible, setDayVisible] = useState(false);
  const items = [
    {
      label: "Phân bổ",
      command: () => checkSelected(),
    },
  ];
  const totalRecords =
    useCountListLead({
      status: undefined,
      ...params,
      first: undefined,
      project_id: project?.project_id,
    }) || 0;
  const [selectedProducts, setSelectedProducts] = useState([]);
  const formatDate = (value) => {
    const date = String(value).substring(0, 10).split("-");
    return ` ${date?.[2] + "-" + date?.[1] + "-" + date?.[0]}`;
  };
  async function handleUpdateData() {
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, "0");
    // const day = String(date.getDate()).padStart(2, "0");
    // const formattedDate = `${year}/${month}/${day}`;
    // await updatedata({ input_date: formattedDate });
    // setParams((pre) => {
    //   return { ...pre, render: !pre.render };
    // });
    setDayVisible(true);
  }
  return (
    <div>
      {project?.project_id && (
        <div className="card mx-auto ">
          <HeaderListForm title="Quản lý khách hàng" />
          <ConfirmDialog />
          {visible && (
            <DivideDialog
              visible={visible}
              setVisible={setVisible}
              selectedProducts={selectedProducts}
              setParams={setParams}
            />
          )}
          {dayVisible && (
            <SelectDay
              visible={dayVisible}
              setVisible={setDayVisible}
              setParams={setParams}
            />
          )}
          <DataTablez
            title="phê duyệt"
            value={list_lead}
            totalRecords={totalRecords}
            params={params}
            setVisibledDialog={setVisible}
            setParams={setParams}
            basePermissions={["detail", "updatedata"]}
            headerInfo={{ items }}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            handleUpdateData={handleUpdateData}
          >
            <Columnz field="name" header="Họ tên" />
            <Columnz field="email" header="Email" />
            <Columnz field="phone" header="Số điện thoại" />
            <Columnz field="source" header="Nguồn" />
            <Columnz
              body={(e) => ParseDepartment(e.department_id)}
              header="Phòng ban"
            />
            <Columnz
              body={(e) => formatDate(e.created_at)}
              header="Thời gian tạo"
            />
          </DataTablez>
        </div>
      )}
    </div>
  );
};
export default Divide;
