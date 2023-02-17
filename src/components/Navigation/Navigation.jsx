import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css';

export default function Navigation() {
  return (
    <div className='navigation'>
      <h4>About me</h4>  
      <Link to='/'>Apply</Link>
      <Link to='/dashboard'>Users</Link>
    </div>
  )
}
