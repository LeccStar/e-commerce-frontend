import { useCallback, useReducer } from "react"
import { getProductsService } from "../services/PRODUCTsERVICE.JS";
import { getProductService } from "../services/PRODUCTsERVICE.JS";
import { types } from "../types/types";
import productReducer from "./ProductReducer"


const initialState = {
  products: [],
  total: 0,
  product: {},
  car:[]
}
const ProductProvider = () => {

  const [productState, dispatch] = useReducer(productReducer, initialState);

  const getProducts = useCallback(
    async()=> {
      try {
        const resp = await getProductsService();
        const products = resp.products.map((obj)=>{
          return{
            uid: obj._id, 
            name: obj.name,
            description: obj.description,
            price: obj.price,
            discount: obj.discount,
            discount_percentaje: obj.discount_percentaje,
            imgUrl1: obj.imgUrl1,
          }
        })

        dispatch({
          type: types.GET_PRODUCTS,
          payload: products
        })
      } catch (error) {
        
      }
    }
  )

  return (
    <div>ProductState</div>
  )
}

export default ProductProvider