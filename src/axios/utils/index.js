import { useEffect, useState } from "react";
import { getInfo } from "../api";

export const useUserInfo = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getInfo({ status: 1, ...params });
    if (response) setData(response);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
