import { useCallback, useReducer } from "react"
import { getProductsService } from "../services/productService";
import { getProductService } from "../services/productService";
import { types } from "../types/types";
import { ProductContext } from "./ProductContext";
import productReducer from "./ProductReducer"


const initialState = {
  products: [],
  total: 0,
  product: {},
  car: []
}
const ProductProvider = ({ children }) => {

  const [productState, dispatch] = useReducer(productReducer, initialState);

  const getProducts = useCallback(
    async () => {
      try {
        const resp = await getProductsService();
        const products = resp.products.map((obj) => {
          return {
            uid: obj._id,
            name: obj.name,
            description: obj.description,
            price: obj.price,
            discount: obj.discount,
            discount_percentaje: obj.discount_percentaje,
            imgUrl: obj.imgUrl,
          }
        })
        dispatch({
          type: types.GET_PRODUCTS,
          payload: products
        })
        dispatch({
          type: types.GET_PRODUCTS_TOTAL,
          payload: resp.total
        })
      } catch (error) {
        console.log(error);
      }
    }, []
  )

  const getProduct = useCallback(
    async (uid) => {
      try {
        const resp = getProductService(uid);
        const product = {
          uid: resp._id,
          name: resp.name,
          description: resp.description,
          price: resp.price,
          discount: resp.discount,
          discount_percentaje: resp.discount_percentaje,
          imgUrl: resp.imgUrl,
        }
        dispatch({
          type: types.GET_PRODUCT,
          payload: product
        })
      } catch (error) {
        console.log(error);
      }
    }, []
  )

  const addProductCar = useCallback(
    async (uid) => {
      try {
        const resp = getProductService(uid);
        const product = {
          uid: resp.data._id,
          name: resp.data.name,
          description: resp.data.description,
          price: resp.data.price,
          discount: resp.data.discount,
          discount_percentaje: resp.data.discount_percentaje,
          imgUrl: resp.data.imgUrl,
        }
        /*         const findProduct = productState.car.find((element)=>{
                  return element.uid === product.uid
                }) */

        dispatch({
          type: types.ADD_PRODUCT_CAR,
          dispatch: product
        })
      } catch (error) {
        console.log(error);
      }
    }, []
  )

  const deleteProductCar = (uid) => {
    dispatch({
      type: types.DELETE_PRODUCT_CAR,
      payload: uid
    })
  }

  const emptyCar = (car) => {
    dispatch({
      type: types.EMPTY_CAR,
      payload: car
    })
  }

  return (
    <ProductContext.Provider value={{
      products: productState.products,
      getProduct,
      getProducts,
      addProductCar,
      deleteProductCar,
      emptyCar
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider