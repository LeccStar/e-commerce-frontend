import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext';
import { UserContext } from '../../../context/UserContext'
import "./Products.css"


const Smartwatch = () => {

  const { user, verifyToken } = useContext(UserContext);
  const { total,getProduct, getProductsbyCategory, productsCategory, addProductCar, } = useContext(ProductContext)

  useEffect(() => {
    verifyToken();
  }, [verifyToken])
  useEffect(() => {
    getProductsbyCategory("Smartwatch");
  }, [getProductsbyCategory])

  console.log(productsCategory)

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5"><strong>Smartwatch</strong></h4>
        <div className='productsContainer'>
          {productsCategory.map(product => {
            return <div className="column30">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light imgPosition" data-mdb-ripple-color="light">
                  {product.discount ? (<><h5 className='positionBadge'><span className="badge bg-danger">-{product.discount_percentaje}%</span></h5>
                  </>) : (<></>)}
                  <img src={product.imgUrl} alt={product.name} className="w-100" />
                </div>
                <div className="card-body">
                  <a href className="text-reset">
                    <h5 className="card-title mb-3">{product.name}</h5>
                  </a>
                  <a 
                    href={`/products/${product._id}`}  lassName="text-reset">
                    <p>View Product</p>
                  </a>
                  {product.discount ? (<h6 className="mb-3">
                    <s>${product.price}</s><strong className="ms-2 text-danger">${product.price - ((product.discount_percentaje / 100) * product.price)}</strong>
                  </h6>
                  ) : (<h6 className="mb-3">${product.price}</h6>
                  )}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>

  )
}

export default Smartwatch