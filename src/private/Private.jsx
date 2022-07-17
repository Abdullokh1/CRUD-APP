import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';

function Private() {
  let isAuth = true
  return (
    <>
      {isAuth ? <Outlet/>  : <Navigate to='/Login'/> }
    
    </>
  )
}

export default Private