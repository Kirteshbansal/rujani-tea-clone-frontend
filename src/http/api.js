import axios from "axios";

import config from "../config/config";

const { dev_domain, pro_domain } = config;

const currEnv = process.env.NODE_ENV;
const BASE_URL = currEnv === "development" ? dev_domain : pro_domain;
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    "Content-Type": "application/json",
});

export default axiosInstance;
