import { getData, postData } from "@/lib/request";

export const listNotifyApi = (params) =>
  getData("web2/notify/getListNotifyMGWeb", params);
export const countNotifyApi = (params) =>
  getData("web2/notify/countNotify", params);
export const readNotifyApi = (params) =>
  postData("web2/notify/readNotify", params);
export const readNotifyV2Api = (params) =>
  postData("web2/notify/readNotifyV2", params);
export const deleteApi = (params) =>
  postData("web2/notify/deleteNotify", params);
export const listProject = (params) =>
  getData("web/project/listProject", params);
