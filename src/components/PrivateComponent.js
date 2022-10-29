import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
    //check if any user is stored in local-storage means the user is signed up and saved in local-storage
    const auth = localStorage.getItem('user');
  return (
    
    auth?<Outlet/>:<Navigate to="/signup"/>
  )
}

export default PrivateComponent