import api from "./http/api";

export const userRegister = async (user) => {
    try {
        return await api.post(`user/register`, user, {
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
        return await api.post(`user/login`, user, {
            withCredentials: false,
        });
    } catch (err) {
        console.error(err);
    }
};

export const userAuth = async (token) => {
    try {
        return await api.get(`auth`, {
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
        return await api.put(`user/${addr.id}`, addr, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.error(err);
    }
};
