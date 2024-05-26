import { getData } from "@/lib/request";

export const getInfo = (params) => getData("/web/auth/getUserInfo", params);
