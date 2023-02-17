import React from 'react'
import { withAppContext } from '../../context/withAppContext';

import './styles.css';

function UserCard({
    _id,
    context,
    firstName,
    lastName,
    image,
}) {
    const {
        deleteUser,
    } = context;

  return (
    <div className='userCard'>
      <img src={`url(${image})`} />  
      <p>{firstName}</p>
      <p>{lastName}</p>
      <button onClick={() => deleteUser(_id)}>Delete</button>
    </div>
  )
}

export default withAppContext(UserCard)
