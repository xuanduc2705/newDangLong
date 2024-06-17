import { useEffect, useState } from "react";
import {
  detailProject,
  getListDepartment,
  getListLead,
  getListAllProject,
  getListAllPage,
  getListAllForm,
  getListProjectForm,
  getListFormPage,
  getListAssignDate,
  listCampaign,
  getCheckId,
  getPbIdByDate,
} from "../api";

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
export const useListAllProject = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListAllProject({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListAllPage = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListAllPage({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListAllForm = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListAllForm({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListProjectForm = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListProjectForm({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListFormPage = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListFormPage({ status: 1, ...params });
    if (response?.status) setData(response?.data?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListAssignDate = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListAssignDate({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useListCampaign = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await listCampaign({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useGetCheckId = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getCheckId({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
export const useGetPbIdByDate = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getPbIdByDate({ status: 1, ...params });
    if (response?.status) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
