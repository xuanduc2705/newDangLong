import { useState } from "react";
import { useCountListLead, useListDepartment, useListLead } from "../utils";
import { useGetParams } from "../../../hooks/useGetParams";
import { Columnz, DataTablez } from "@/components/data_table";
import {
  Dropdownz,
  GridForm,
  HeaderListForm,
} from "@/components/data_table/FormList";
import { setToast } from "@/redux/features";
import { listToast } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import DivideDialog from "./DivideDialog";
import { updatedata } from "../api";
import SelectDay from "./SelectDay";
import { useListProject } from "@/layout/utils";
const Header = ({ setParams, setFilter, filter }) => {
  const data = useListProject();
  const handleNodeChange = (e) => {
    setFilter({
      project_id_ad: e.value,
      token: data?.filter((item) => item?.project_id_ad == e.value)?.[0]
        ?.access_token,
    });
  };
  return (
    <GridForm
      setParams={setParams}
      filter={filter}
      setFilter={setFilter}
      hideButton={true}
      className="lg:col-9 mb-4"
    >
      <Dropdownz
        value={filter?.project_id_ad}
        onChange={(e) => handleNodeChange(e)}
        options={data}
        className="mt-2 col-4"
        placeholder="Chọn Page"
        optionLabel="name"
        optionValue="project_id_ad"
        filter
        clearIcon={false}
        style={{ lineHeight: "30px" }}
      ></Dropdownz>
    </GridForm>
  );
};
const Divide = () => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  // const project = JSON.parse(localStorage.getItem("item"));
  const list_lead = useListLead({
    status: undefined,
    ...params,
    first: undefined,
    project_id_ad: filter?.project_id_ad,
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
      project_id_ad: filter?.project_id_ad,
    }) || 0;
  const [selectedProducts, setSelectedProducts] = useState([]);
  const formatDate = (value) => {
    const date = String(value).substring(0, 10).split("-");
    return ` ${date?.[2] + "-" + date?.[1] + "-" + date?.[0]}`;
  };
  async function handleUpdateData() {
    setDayVisible(true);
  }
  return (
    <div>
      <div className="card mx-auto ">
        <HeaderListForm title="Quản lý khách hàng" />
        <Header setParams={setParams} setFilter={setFilter} filter={filter} />
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
            filter={filter}
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
    </div>
  );
};
export default Divide;
