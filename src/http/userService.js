import axiosInstance from "./api";

export const userRegister = async (user) => {
    try {
        return await axiosInstance.post(`user/register`, user);
    } catch (err) {
        console.error(err);
    }
};

export const userLogIn = async (user) => {
    try {
        const res = await axiosInstance.post(`user/login`, user, {
            withCredentials: true,
        });
        console.error(res);
        if (res) {
            return res;
        }
    } catch (err) {
        console.error(err);
    }
};

export const updateUserAddress = async (userId, addrData) => {
    try {
        return await axiosInstance.put(`user/updateUserInfo/${userId}`, addrData, {
            headers: {
                withCredentials: true,
            },
        });
    } catch (err) {
        console.error(err);
    }
};

export const updateAddress = async (userId, addrData) => {
    try {
        return await axiosInstance.put(`user/updateUserAddress/${userId}`, addrData, {
            headers: {
                withCredentials: true,
            },
        });
    } catch (err) {
        console.error(err);
    }
};

export const addUserAddress = async (userId, addrData) => {
    try {
        return await axiosInstance.post(`user/addUserAddress/${userId}`, addrData, {
            headers: {
                withCredentials: true,
            },
        });
    } catch (err) {
        console.error(err);
    }
};
