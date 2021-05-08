import api from "./http/api";

export const getAllProducts = async () => {
    try {
        return await api.get(`products`);
    } catch (err) {
        console.error(err);
    }
};

export const getProductsByCollection = async (id) => {
    try {
        return await api.get(`category/${id}`);
    } catch (err) {
        console.error(err);
    }
};

export const getProduct = async (id) => {
    try {
        return await api.get(`product/${id}`);
    } catch (err) {
        console.error(err);
    }
};
