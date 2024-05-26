import { useEffect, useState } from "react";
import { listNotifyApi, countNotifyApi, listProject } from "../api";

export const useListNotify = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await listNotifyApi({ ...params });
    if (response.data.status) setData(response.data.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListProject = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await listProject({ ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useCountNotify = (params) => {
  const [data, setData] = useState(0);
  async function fetchData() {
    const response = await countNotifyApi({ status: 1, ...params });
    if (response.data.status) setData(response.data.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
