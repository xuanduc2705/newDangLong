import { useState } from "react";
import {
  useCountListLead,
  useListAllPage,
  useListAllProject,
  useListCampaign,
  useListProjectForm,
} from "../utils";
import { useGetParams } from "../../../hooks/useGetParams";
import { Columnz, DataTablez } from "@/components/data_table";
import {
  Dropdownz,
  GridForm,
  HeaderListForm,
} from "@/components/data_table/FormList";

import { Dialogz, LoadDialog } from "@/components/data_table/Dialogz";
import { useListProject } from "@/layout/utils";
import { Button } from "@/uiCore";
import { Link } from "react-router-dom";
import {
  DropdownForm,
  FormUpdateDialog,
  InputForm,
} from "@/components/data_table/FormUpdate";
import { updateProjectCampaign } from "../api";
const Header = ({ setParams, setFilter, filter }) => {
  const data = useListProject();
  const handleNodeChange = (e) => {
    setFilter({ project_id: e.value });
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
        value={filter?.project_id}
        onChange={(e) => handleNodeChange(e)}
        options={data}
        className="mt-2 col-4"
        placeholder="Chọn dự án"
        optionLabel="name"
        optionValue="project_id"
        filter
        clearIcon={false}
        style={{ lineHeight: "30px" }}
      ></Dropdownz>
    </GridForm>
  );
};
const PageList = () => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const [filter, setFilter] = useState();
  const data_project = useListCampaign(params);
  const [visible, setVisible] = useState(false);
  const [infos, setInfos] = useState();
  const totalRecords =
    useCountListLead({
      status: undefined,
      ...params,
      first: undefined,
      project_id: filter?.project_id,
    }) || 0;
  const formatDate = (value) => {
    const date = String(value).substring(0, 10).split("-");
    return ` ${date?.[2] + "-" + date?.[1] + "-" + date?.[0]}`;
  };

  const list_project = useListAllProject();
  const list_page = useListAllPage();

  const getProjectName = (id) => {
    return list_project?.filter((e) => e.cb_id == id)?.[0]?.cb_title;
  };
  const getPageName = (id) => {
    return list_page?.filter((e) => e.project_id_ad == id)?.[0]?.name;
  };
  const [showDialog, setShowDialog] = useState(false);
  const [campaignName, setCampaignName] = useState();
  const handleShow = (page, form, project_id, id) => {
    setShowDialog(true);
    setCampaignName(`${page} - ${form}`);
    setInfos({ ...infos, project_id: project_id, id: id });
  };
  const list_projectForm = useListProjectForm();
  const handleData = () => {
    if (!infos?.project_id) return "Bạn chưa chọn dự án";
    return infos;
  };
  return (
    <div>
      {showDialog && (
        <FormUpdateDialog
          visible={showDialog}
          setVisible={setShowDialog}
          title="Phân chia dự án"
          checkId={Number(showDialog)}
          setParams={setParams}
          actions={{ update: updateProjectCampaign }}
          handleData={handleData}
        >
          <div className="grid grid-form" style={{ marginBottom: "20vh" }}>
            <div className="col-6">
              <InputForm label="Tên chiến dịch" value={campaignName} readOnly />
            </div>
            <div className="col-6 ">
              <DropdownForm
                value={infos?.project_id}
                onChange={(e) =>
                  setInfos({ ...infos, project_id: e.target.value })
                }
                options={list_projectForm}
                optionLabel="cb_title"
                optionValue="cb_id"
                label="Dự án"
              />
            </div>
          </div>
        </FormUpdateDialog>
      )}
      <div className="card mx-auto ">
        <HeaderListForm title="Quản lý khách hàng" />

        <LoadDialog visible={visible} />
        <DataTablez
          title="phê duyệt"
          value={data_project}
          totalRecords={totalRecords}
          params={params}
          setParams={setParams}
        >
          <Columnz field="id_form" header="Mã chiến dịch" />
          <Columnz header="Tên page" field="name" />
          <Columnz
            header="Dự án"
            body={(e) => (
              <div style={{ display: "flex" }}>
                <span className="mr-4">{getProjectName(e.project_id)}</span>
                <i
                  className="pi pi-file-edit"
                  style={{ fontSize: "1.4rem", color: "#2cc0da" }}
                  onClick={() =>
                    handleShow(e.name, e.id_form, e.project_id, e.id)
                  }
                ></i>
              </div>
            )}
          />
          <Columnz
            body={(e) => (
              <Link to={`/page_list/detail/${e?.id}`}>
                {" "}
                <Button
                  type="button"
                  icon="pi pi-eye"
                  rounded
                  outlined
                  className={"mr-1 mx-auto flex"}
                />
              </Link>
            )}
            header="Chi tiết lịch phân bổ"
          />
        </DataTablez>
      </div>
    </div>
  );
};
export default PageList;
