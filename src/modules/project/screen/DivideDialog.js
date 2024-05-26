import {
  DropdownForm,
  FormUpdateDialog,
} from "@/components/data_table/FormUpdate";
import { useListDepartment } from "../utils";
import { useState } from "react";
import { phanBo } from "../api";
import { useParams } from "react-router-dom";

const DivideDialog = (props) => {
  const { visible, setVisible, selectedProducts, setParams } = props;
  const [infos, setInfos] = useState({
    leads: selectedProducts?.map((e) => e.id),
    department_id: "",
  });
  const list_department = useListDepartment({
    status: undefined,
  });
  const handleData = () => {
    return infos;
  };
  //   const handleAfterCallApi = async () => {
  //     const getApartments = await listApartmentV2Api();
  //     if (getApartments.data && getApartments.data.status) {
  //       const apartments = getApartments.data.data;
  //       dispatch(setApartments(apartments));
  //     }
  //   };
  return (
    <FormUpdateDialog
      title="PHÂN BỔ PHÒNG BAN"
      visible={visible}
      setVisible={setVisible}
      refreshObjects={[setInfos]}
      handleData={handleData}
      actions={{ update: phanBo }}
      checkId={Number(visible)}
      setParams={setParams}
    >
      <div>
        <DropdownForm
          value={infos?.department_id}
          onChange={(e) =>
            setInfos({ ...infos, department_id: e.target.value })
          }
          options={list_department}
          optionLabel="gb_title"
          optionValue="gb_id"
          label="Phòng ban"
        />
      </div>
      <div style={{ height: "25vh" }}></div>
    </FormUpdateDialog>
  );
};
export default DivideDialog;
