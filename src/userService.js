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
      withCredentials: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export const userAuth = async (user) => {
  try {
    return await axios.get(`${BASE_URL}auth`);
  } catch (err) {
    console.error(err);
  }
};
