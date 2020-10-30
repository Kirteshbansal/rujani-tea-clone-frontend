import axios from "axios";

const BASE_URL = "https://rujani-tea-clone.herokuapp.com/api/";

export const userRegister = async (user) => {
  try {
    return await axios.post(`${BASE_URL}user/register`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const userLogIn = async (user) => {
  try {
    return await axios.post(`${BASE_URL}user/login`, user, {
      withCredentials: false,
    });
  } catch (err) {
    console.error(err);
  }
};

export const userAuth = async (token) => {
  try {
    return await axios.get(`${BASE_URL}auth`, {
      headers: {
        rt_token: token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateAddress = async (addr) => {
  try {
    return await axios.put(`${BASE_URL}user/${addr.id}`, addr, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
  }
};
