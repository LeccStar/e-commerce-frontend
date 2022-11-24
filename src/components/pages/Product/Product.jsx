import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../../context/ProductContext'


export const Product = () => {

  const { getProduct, product } = useContext(ProductContext)
  const { id } = useParams()

  useEffect(() => {
    getProduct(id)
  }, [getProduct])

  console.log(product);
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Specification 1</li>
          <li className="list-group-item">Specification 2</li>
          <li className="list-group-item">Specification 3</li>
        </ul>
        <div className="card-body">
          {product.discount ? (<h6 className="mb-3">
            <s>${product.price}</s><strong className="ms-2 text-danger">${product.price - ((product.discount_percentaje / 100) * product.price)}</strong>
          </h6>
          ) : (<h6 className="mb-3">${product.price}</h6>
          )}
          <a href="/" className="card-link">Añadir al carrito</a>
        </div>
      </div>
    </>
  )
}
