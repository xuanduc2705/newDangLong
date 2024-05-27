import { getData, postData } from "@/lib/request";

export const detailProject = (params) =>
  getData("web/project/detailProject", params);
export const getListLead = (params) => getData("/web/lead/getListLead", params);
export const getListDepartment = (params) =>
  getData("/web/lead/getListDepartment", params);
export const phanBo = (params) => postData("/web/lead/phanBo", params);
export const updatedata = (params) => postData("/web/project/syncData", params);
