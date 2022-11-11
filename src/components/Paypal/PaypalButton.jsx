import React from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'
import { ProductContext } from '../../context/ProductContext'
import { useEffect } from 'react'

const style = { layout: 'vertical'}

const PaypalButton = ({currency, amount, showSpinner}) => {

    const [{options, isPending}, dispatch] = usePayPalScriptReducer()

    useEffect(()=>{
        dispatch({
            type: 'resetOptions',
            value:{
                ...options,
                currency,
                showSpinner
            }
        })

    }, [currency,showSpinner])

  return (
    <div>PaypalButton</div>
  )
}

export default PaypalButton