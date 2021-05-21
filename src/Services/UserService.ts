import axios from '../axios/axios';
import User from '../Models/User';

export const add = (user: User) => {
    return axios.post('/user', user);
}

export const edit = (user: User) => {
    return axios.patch(`/user/${user._id}`, user);
}

export const deleteOne = (id: string) => {
    return axios.delete(`/user/${id}`);
}

export const getMany = (page: number, count: number) => {
    return axios.get('/user', {
        params: { page, count },
    });
}

export const getOne = (id: string) => {
    return axios.get(`user/${id}`);
}

interface Login {
    username: string,
    password: string,
}

export const login = (login: Login) => {
    return axios.post('/user/login', login);
};

export const follow = (id: string) => {
    return axios.patch(`/user/follow/${id}`);
}

export const unfollow = (id: string) => {
    return axios.patch(`/user/unfollow/${id}`);
}