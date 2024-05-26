import { getData, postData } from "@/lib/request";

export const getListMessage = (params) =>
  getData("/web/project/listMessage", params);
export const sendMessage = (params) =>
  postData("/web/project/sendMessage", params);
export const getListCountMess = (params) =>
  getData("/web/count_mess/getListCountMess", params);
export const updateLastCount = (params) =>
  postData("/web/count_mess/UpdateLastCount", params);
export const MessageLastCount = (params) =>
  postData("/web/count_mess/MessageLastCount", params);
