import axiosInstance from "./http/api";

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
            withCredentials: false,
        });
        console.error(res);
        if (res) {
            return res;
        }
    } catch (err) {
        console.error(err);
    }
};

export const userAuth = async (token) => {
    try {
        return await axiosInstance.get(`auth`, {
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
        return await axiosInstance.put(`user/${addr.id}`, addr, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.error(err);
    }
};
