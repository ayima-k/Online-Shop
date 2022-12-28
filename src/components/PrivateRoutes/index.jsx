import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const users = !!localStorage.getItem('accessToken')

  return users ? <Outlet/> : window.confirm("Your're unauthorized. To go - confirm the action.") ? <Navigate to={'/auth/register'}/> : <Navigate to={'/'}/>
}

export default PrivateRoutes