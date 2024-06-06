import { getData, postData } from "@/lib/request";

export const detailProject = (params) =>
  getData("web/project/detailProject", params);
export const getListLead = (params) => getData("/web/lead/getListLead", params);
export const getListAllProject = (params) =>
  getData("/web/project/getListAllProject", params);
export const getListDepartment = (params) =>
  getData("/web/lead/getListDepartment", params);
export const getListAllPage = (params) =>
  getData("/web/project/getListAllPage", params);
export const phanBo = (params) => postData("/web/lead/phanBo", params);
export const updatePage = (params) =>
  postData("/web/project/updatePage", params);
export const updatedata = (params) => postData("/web/project/syncData", params);
export const getListAllForm = (params) =>
  getData("/web/project/getListAllForm", params);
export const getListProjectForm = (params) =>
  getData("/web/project/getListProjectForm", params);
export const getListFormPage = (params) =>
  getData("web/form_page/getListFormPage", params);
export const getListAssignDate = (params) =>
  getData("web/form_page/getListAssignDate", params);
export const listCampaign = (params) =>
  getData("web/campaign/listCampaign", params);
export const getCheckId = (params) =>
  getData("web/form_page/getCheckId", params);
export const updateProjectCampaign = (params) =>
  postData("/web/campaign/updateProjectCampaign", params);
export const assignDateSingle = (params) =>
  postData("/web/form_page/assignDateSingle", params);
