import { useState, useCallback } from 'react'
import { verifyTokenService } from '../services/userService'
//import { types } from '../../types/types'
import { UserContext } from './UserContext'


const initialState = {
  uid: null,
  name: null
}

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null)

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
    window.localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE)
    setUser(null)
  }
  const verifyToken = useCallback(async () => {
    const token = window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE);
    if (token) {
      const data = await verifyTokenService();
      window.localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, token)
      setUser({
        name: data.user.name,
        uid: data.user.uid
      });
    } else {
      logoutContext();
    }
  }, [])


  return (
    <UserContext.Provider value={{ user, loginContext, logoutContext, verifyToken }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider