import axios from "axios";

import config from "../config/config";

const { development, dev_domain, pro_domain } = config;

const BASE_URL = development ? dev_domain : pro_domain;

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
