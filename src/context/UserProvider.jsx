import { useState, useCallback } from 'react'
import {useReducer} from 'react'
import { verifyTokenService } from '../services/userService'
//import { types } from '../../types/types'
import authReducer from './AuthReducer'
import { UserContext } from './UserContext'

const MY_AUTH_APP = "MY_AUTH_APP"

const initialState = {
  uid: null,
  name: null 
}

const UserProvider = ({children}) => {

   // const user = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE));

    //const [user,setUser] = useState(window.localStorage.getItem(MY_AUTH_APP))
    const [user,setUser] = useState(initialState)

    const loginContext = (data) => {
      //window.localStorage.setItem(MY_AUTH_APP, user.token)
      //setUser(user)
      setUser({
        name: data.user.name,
        uid: data.user.uid
      });

      window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, data.token)
    }

    const logoutContext = (user) => {
      window.localStorage.removeItem(MY_AUTH_APP)
      setUser({
        name: null,
        uid: null
      })
    }
    const verifyToken = useCallback(async ()=>{
      const token = window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE);
      if (token) {
        const data = await verifyTokenService();
        setUser({
          name: data.user.name,
          uid: data.user.uid
        });
      } else {
        logoutContext();
      }
    },[])
    

  return (
    <UserContext.Provider value={{user,loginContext, logoutContext, verifyToken}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProvider