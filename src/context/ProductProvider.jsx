import { useCallback, useContext, useReducer } from "react"
import { getProductsService } from "../services/productService";
import { getProductService } from "../services/productService";
import { types } from "../types/types";
import { ProductContext } from "./ProductContext";
import productReducer from "./ProductReducer"
import { UserContext } from "./UserContext";


const initialState = {
  products: [],
  productsCategory: [],
  total: 0,
  product: {},
  cart: []
}
const ProductProvider = ({ children }) => {

  const [productState, dispatch] = useReducer(productReducer, initialState);
  const {user }=useContext(UserContext)

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
        const products = resp.products.filter((product) => product.category.name === category)
        dispatch({
          type: types.GET_PRODUCTS_CATEGORY,
          payload: products
        })

      } catch (error) {
        console.log(error);
      }
    }, []
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

  const addProductCart =
    (product) => {
      try {
        //const resp = await getProductService(uid);
        /*         const findProduct = productState.cart.find((product) => {
                  return product.uid === uid
                })
         */        //if (!findProduct) {
        /*           console.log('producto añadido');    
                }else{    
                  console.log('producto ya se encuentra añadido en el carrito');    
                } */

        dispatch({
          type: types.ADD_PRODUCT_CART,
          payload: product
        })

      } catch (error) {
        console.log(error);
      }
      window.localStorage.setItem('CART', JSON.stringify(productState.cart))

    }

  const verifyCart = useCallback(() => {
    const cart = JSON.parse(window.localStorage.getItem('CART'))
    if (cart) {
      window.localStorage.setItem('CART', JSON.stringify(cart))
      /*       cart.forEach(element => {
              dispatch({
                type: types.ADD_PRODUCT_CART,
                payload: element
              })
      
            }); */
      dispatch({
        type: types.UPDATE_PRODUCT_CART,
        payload: cart
      })
    }

  }, []
  )

  const deleteProductCart = (uid) => {
    dispatch({
      type: types.DELETE_PRODUCT_CART,
      payload: uid
    })
    window.localStorage.setItem('CART', JSON.stringify(productState.cart))
  }

  const deleteOneProductCart = (product) => {
    const index = productState.cart.findIndex((element)=> element.name===product.name)
    productState.cart.splice(index,1)
    dispatch({
      type: types.UPDATE_PRODUCT_CART,
      payload: productState.cart
    })
    window.localStorage.setItem('CART', JSON.stringify(productState.cart))

  }

  const emptyCart = useCallback(() => {
    const token = window.localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE);
      if (!token) {
        dispatch({
          type: types.EMPTY_CART,
          payload: []
        })
        window.localStorage.setItem('CART', JSON.stringify(productState.cart))
  
      }      
  },[])
  return (
    <ProductContext.Provider value={{
      product: productState.product,
      products: productState.products,
      total: productState.total,
      productsCategory: productState.productsCategory,
      cart: productState.cart,
      getProduct,
      getProducts,
      getProductsbyCategory,
      addProductCart,
      verifyCart,
      deleteProductCart,
      deleteOneProductCart,
      emptyCart
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider