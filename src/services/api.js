import Axios from "axios";

export const BASE_URL =
  "https://altitudists-frontend-f7c210d67743.herokuapp.com/";

const Client = Axios.create({ baseURL: BASE_URL });

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { Client }; 