import axios from 'axios'

const URL_AUTH = `${process.env.REACT_APP_API_URL}/auth/login`;

const URL_USERS = `${process.env.REACT_APP_API_URL}/users/`;

const ConfigHeader = {
    headers:{
        "x-token": window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)
    }
}

export const loginService = async (data) => {
    const resp = await axios.post(URL_AUTH, data);
    return resp.data
}

export const signupService = async (data) => {

    const resp = await axios.post (URL_USERS, data)
    return resp.data;
}

export const putUserService = async (uid, data)=> {
    const resp = await axios.put(`${URL_USERS}/${uid}`, data)
    return resp.data
}

export const verifyTokenService = async()=> {
    const resp = await axios.get(URL_USERS, ConfigHeader)
    return resp.data
}