import {
  CalendarForm,
  DropdownForm,
  FormUpdateDialog,
} from "@/components/data_table/FormUpdate";
import { useListDepartment } from "../utils";
import { useState } from "react";
import { phanBo, updatedata } from "../api";
import { useParams } from "react-router-dom";

const SelectDay = (props) => {
  const { visible, setVisible, setParams } = props;
  const [infos, setInfos] = useState({});
  const list_department = useListDepartment({
    status: undefined,
  });
  const handleData = () => {
    if (!infos?.input_date) return "Vui lòng chọn ngày";
    const year = infos?.input_date.getFullYear();
    const month = String(infos?.input_date.getMonth() + 1).padStart(2, "0");
    const day = String(infos?.input_date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;

    return { input_date: formattedDate };
  };

  return (
    <FormUpdateDialog
      title="Chọn thời gian tự động"
      visible={visible}
      setVisible={setVisible}
      refreshObjects={[setInfos]}
      handleData={handleData}
      actions={{ update: updatedata }}
      checkId={Number(visible)}
      setParams={setParams}
    >
      <div>
        <CalendarForm
          label="Thời gian "
          value={infos.input_date}
          onChange={(e) => setInfos({ ...infos, input_date: e.target.value })}
        />
      </div>
      <div style={{ height: "25vh" }}></div>
    </FormUpdateDialog>
  );
};
export default SelectDay;
