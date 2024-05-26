import { useEffect, useState } from "react";
import { getListCountMess, getListMessage } from "../api";

export const useListMessage = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListMessage({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListMessageV2 = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListMessage({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListCountMess = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListCountMess({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
