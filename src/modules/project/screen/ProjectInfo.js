import { useGetParams } from "@/hooks";
import { useState } from "react";
import { useDetailProject } from "../utils";
const { HeaderListForm } = require("@/components/data_table/FormList");
const {
  InputForm,
  InputTextareaForm,
} = require("@/components/data_table/FormUpdate");
const { UploadImg } = require("@/components/data_table/UploadImage");

const ProjectInfo = () => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const project = JSON.parse(localStorage.getItem("item"));
  const data = useDetailProject({
    status: undefined,
    ...params,
    project_id: project?.project_id_ad,
    token: project?.access_token,
  });
  console.log(data);
  return (
    <div className="grid grid-form justify-content-center">
      <div className="col-12 lg:col-7">
        <div className="card">
          <HeaderListForm title="Thông tin dự án" />
          <InputForm value={data?.name} label="Tên dự án" readOnly />
          <InputForm label="Mã dự án" value={data?.id} readOnly />
          <InputForm label="Vị trí" value={data?.about} readOnly />
          <InputTextareaForm
            id="description"
            value={data.description}
            label="Mô tả"
            readOnly
          />
        </div>
      </div>
      <div className="col-12 lg:col-5">
        <div className="card">
          <HeaderListForm title="Logo dự án" />
          <UploadImg image={data?.picture?.data?.url} view />
          <br />
        </div>
        <div className={"card"}>
          <HeaderListForm title="Banner dự án" />
          <UploadImg
            image={data?.cover?.source}
            style={{ width: "100%" }}
            width="500px"
            view
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectInfo;
