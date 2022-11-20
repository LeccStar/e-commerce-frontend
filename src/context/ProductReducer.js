import React from 'react'
import { types } from '../types/types'

const productReducer = (state = {}, action) => {

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
                products: action.payload
            }
        case types.ADD_PRODUCT_CAR:
            return {
                ...state,
                car: [...state.car, action.payload]
            }
        case types.DELETE_PRODUCT_CAR:
            return {
                ...state,
                car: state.car.filter((product) => product.id !== action.payload)
            }
        case types.EMPTY_CAR:
            return {
                ...state,
                car: []
            }

        default:
            return state;
    }

}

export default productReducer