import {useReducer} from 'react'
import { types } from '../../types/types'
import authReducer from './AuthReducer'

const UserProvider = () => {

    const user = JSON.parse(window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE));

    

  return (
    <div>UserProvider</div>
  )
}

export default UserProvider