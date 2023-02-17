import React, { useState } from 'react';
import { api } from '../api';
import { AppContext } from './app-context';

export const AppContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);

    const createUser = async (data) => {
        await api.createUser(data);
    }

    const deleteUser = async id => {
        await api.deleteUser(id);

        setUsers(users => users.filter(user => user._id !== id));
    }

    const getUsers = async () => {
        const response = await api.getUsers();

        console.log(response, 'response')

        setUsers(response.data);
    }

    const context = {
        users,
        createUser,
        deleteUser,
        getUsers,
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}