import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  // const { users, loading } = React.useContext(AuthContext)
  const users = false

  // if (loading) return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}><Loader/></div>)

  return users ? <Outlet/> : window.confirm('Вы не зарегистрированы! Чтобы перейти, подтвердите действие.') ? <Navigate to={'/auth/register'}/> : <Navigate to={'/'}/>
}

export default PrivateRoutes