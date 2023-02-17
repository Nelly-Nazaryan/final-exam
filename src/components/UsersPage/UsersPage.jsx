import React, { useEffect } from 'react';
import { withAppContext } from '../../context/withAppContext';

import './styles.css';
import UserCard from './UserCard';

function UsersPage({
    context,
}) {

    const {
        users,
        getUsers,
    } = context;


  useEffect(() => {
    getUsers();
  }, []);  


  return (
    <div className='usersPage'>
      {
        users.map(user => (
            <UserCard key={user._id} _id={user._id} {...user} />
        ))
      }
    </div>
  )
}

export default withAppContext(UsersPage);