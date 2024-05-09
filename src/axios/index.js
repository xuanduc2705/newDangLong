import { clientApi } from "./clientApi";

export const LoginApi = (username, password) =>
  clientApi.post("/authen/authen/sign-in", { username, password });
