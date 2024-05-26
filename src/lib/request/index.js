import { clientApi } from "@/axios";
import { convertData, createFormData } from "./request";
import axios from "axios";
import store from "@/redux/store";
import { generateRSAkey } from "@/lib";

export const postData = (
  url,
  data,
  isUpload = false,
  blob = false,
  timeout = 600000
) => {
  if (isUpload || blob) {
    const {
      file,
      files,
      image,
      avatar,
      cmt_image,
      images,
      vehicle_registration,
      insurance_photo,
      logo,
      signature,
      education_files,
      health_files,
      ...params
    } = data;
    data = createFormData(
      params,
      file,
      files,
      image,
      avatar,
      cmt_image,
      images,
      vehicle_registration,
      insurance_photo,
      logo,
      signature,
      education_files,
      health_files
    );
  } else data = convertData(data);
  if (blob)
    return clientApi.post(url, data, {
      timeout,
      responseType: "blob",
      headers: { "Content-Type": "multipart/form-data" },
    });
  else if (isUpload)
    return clientApi.post(url, data, {
      timeout,
      headers: { "Content-Type": "multipart/form-data" },
    });
  else return clientApi.post(url, data, { timeout });
};

export const getData = (url, params, blob = false, timeout = 600000) => {
  params = convertData(params);
  if (blob)
    return clientApi.get(url, {
      params,
      timeout,
      responseType: "blob",
      headers: { "Content-Type": "multipart/form-data" },
    });
  else return clientApi.get(url, { params });
};

export const getDataV2 = (url, params, blob = false, timeout = 600000) => {
  const clientApiV2 = axios.create({
    baseURL: "",
  });
  clientApiV2.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return clientApiV2.get(url, { params });
};
