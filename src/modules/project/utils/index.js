import { useEffect, useState } from "react";
import { detailProject, getListDepartment, getListLead } from "../api";

export const useListLead = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListLead({ status: 1, ...params });
    if (response?.status) setData(response?.data.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useCountListLead = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListLead({ status: 1, ...params });
    if (response?.status) setData(response?.data.total);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListDepartment = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListDepartment({ status: 1, ...params });
    console.log(response);
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useDetailProject = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await detailProject({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
