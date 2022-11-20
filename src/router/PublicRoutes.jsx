import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PublicRoutes = ({children}) => {

    const {user}= useContext(UserContext);
    
  return ( !user )
  ? children
  : <Navigate to={"/home"}/>

}


export default PublicRoutes