import axios from "axios";

export const clientApi = axios.create({
  baseURL: "http://localhost:5002",
  timeout: 10000,
});

clientApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const info = {
      client_id: "6DomwEJfkV_1709794387169",
      time: 1715675087156,
      signature:
        "FjqQ4N/eSFXKnoEB1lQEkIbnk8y6dTqutdWK0A1gPDIhmy1DSzkgDbPdpWpMwAs3a4BQTubmNN6YdmpiD0gZ1S+NxzZ3EKfV0QVqBPgVJSic89kRlE4JkLpH8ixwFkcSfyXsvCPVsqFY+CWq6ejf2OdPSPpnOTm/085EIrhc4/mjSPwvXmrTNjBUh9o2Myd+Tg411uYdXCMyL53RItjOFjj29nW+FvV/pjE2DFa3p2DEa67VmEi89jROscQ9v0pmwiD22ghtbTg7sIqrGqoDhULKzSsPcD4vbOlWefIrkfvy9GbetrzbEutMZHXHy0pLHm10tAySzbMgdYcHPHAKow==",
    };
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (info) {
      config.headers["info"] = JSON.stringify(info);
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

clientApi.interceptors.response.use(
  async function (res) {
    return res.data;
  },
  async function (error) {}
);
