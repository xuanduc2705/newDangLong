import { postData } from "@/lib/request";

export const LoginApi = (email, password) =>
  postData("/web/auth/login", { email, password });
