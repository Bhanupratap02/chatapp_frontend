/** @format */

import axios from "axios";

const options = {
  //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: "http://localhost:4000",
  withCredentials: true,
  // timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { data, status } = error.response;
    console.log(data, "data");
    if (status === 401 && data.error === "Unauthorized access") {
        // redirect to login page
        // return Promise.reject(error);
        // logout user
    }
    return Promise.reject({
      ...data,
    });
  }
);

export default API;
