import axiosInstance from "./api";

export const getAllProducts = async () => {
    try {
        return await axiosInstance.get(`products`);
    } catch (err) {
        console.error(err);
    }
};

export const getProductsByCollection = async (id) => {
    try {
        return await axiosInstance.get(`category/${id}`);
    } catch (err) {
        console.error(err);
    }
};

export const getProduct = async (id) => {
    try {
        return await axiosInstance.get(`product/${id}`);
    } catch (err) {
        console.error(err);
    }
};

export const getCollections = async () => {
    try {
        return await axiosInstance.get(`categories`);
    } catch (err) {
        console.error(err);
    }
};
