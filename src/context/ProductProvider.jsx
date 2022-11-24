import { useCallback, useReducer } from "react"
import { getProductsService } from "../services/productService";
import { getProductService } from "../services/productService";
import { types } from "../types/types";
import { ProductContext } from "./ProductContext";
import productReducer from "./ProductReducer"


const initialState = {
  products: [],
  productsCategory:[],
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
        dispatch({
          type: types.GET_PRODUCTS,
          payload: resp.products
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

 const getProductsbyCategory = useCallback(
    async (category) => {
      try {
        const resp = await getProductsService();
        const products = resp.products.filter((product) => product.category.name===category)
        dispatch({
          type: types.GET_PRODUCTS_CATEGORY,
          payload: products
        })
        
      } catch (error) {
        console.log(error);
      }
    },[]
  )

  const getProduct = useCallback(
    async (uid) => {
      try {
        const resp = await getProductService(uid);
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
          payload: resp
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
      product: productState.product,
      products: productState.products,
      total: productState.total,
      productsCategory: productState.productsCategory,
      getProduct,
      getProducts,
      getProductsbyCategory,
      addProductCar,
      deleteProductCar,
      emptyCar
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider