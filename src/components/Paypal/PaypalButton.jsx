import React from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'
import { ProductContext } from '../../context/ProductContext'
import { useEffect } from 'react'
import { useContext } from 'react'



const PaypalButton = ({currency, total, showSpinner}) => {

    const [{options, isPending}, dispatch] = usePayPalScriptReducer()

    useEffect(()=>{
        dispatch({
            type: 'resetOptions',
            value:{
                ...options,
                currency,
            }
        })

    }, [currency, showSpinner])

    return (<>
      <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
  </>
);

}

export default PaypalButton


