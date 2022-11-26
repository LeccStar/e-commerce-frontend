import React from 'react'
import { types } from '../types/types'

const productReducer = (state, action) => {

    switch (action.type) {
        case types.GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case types.GET_PRODUCTS_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        case types.GET_PRODUCTS_CATEGORY:
            return {
                ...state,
                productsCategory: action.payload
            }
        case types.ADD_PRODUCT_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case types.UPDATE_PRODUCT_CART:
            return {
                ...state,
                cart: action.payload
            }
        case types.DELETE_PRODUCT_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        case types.EMPTY_CART:
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }

}

export default productReducer