import axios from "axios";

const API_ENDPOINT = "https://crudcrud.com/api/36e68390bc6e4741a3834a3ce1f0c296/";

export const createUser = (data) => {
    return axios.post(`${API_ENDPOINT}users`, data,)
};


export const getUsers = () => {
    return axios.get(`${API_ENDPOINT}users`);
};

export const deleteUser = (id) => {
    return axios.delete(`${API_ENDPOINT}users/${id}`)
}

export const api = {
    createUser,
    getUsers,
    deleteUser,
}