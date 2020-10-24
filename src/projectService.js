import axios from "axios";

const BASE_URL = "https://rujani-tea-clone.herokuapp.com/api/";

export const getAllProducts = async () => {
  try {
    return await axios.get(`${BASE_URL}products`);
  } catch (err) {
    console.error(err);
  }
};
