import axios from "axios";

const URL_PRODUCTS = `${process.env.REACT_APP_API_URL}/products`;

export const getProductsService = async ()=> {
    const resp = await axios.get(URL_PRODUCTS);
    return resp.data
}

export const getProductService = async (uid)=> {
    const resp = await axios.get(`${URL_PRODUCTS}/${uid}`);
    return resp.data
}