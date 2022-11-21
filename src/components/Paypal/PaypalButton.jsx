import React from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import Swal from 'sweetalert2'
import { ProductContext } from '../../context/ProductContext'
import { useEffect } from 'react'
import { useContext } from 'react'

const style = { layout: 'vertical'}

const PaypalButton = ({currency, amount, showSpinner}) => {

    const [{options, isPending}, dispatch] = usePayPalScriptReducer()

    const {car, emptyCar} =useContext(ProductContext)

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

    return (<>
      { (showSpinner && isPending) && <div className="spinner" /> }
      <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
              return actions.order
                  .create({
                      purchase_units: [
                          {
                              amount: {
                                  currency_code: currency,
                                  value: amount,
                              },
                          },
                      ],
                  })
                  .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                  });
          }}
          onApprove={function (data, actions) {
              return actions.order.capture().then(function () {
                  // Your code here after capture the order
              });
          }}
      />
  </>
);

}

export default PaypalButton