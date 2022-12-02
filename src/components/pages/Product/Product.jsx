import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { ProductContext } from '../../../context/ProductContext'
import { UserContext } from '../../../context/UserContext'
import Cart from './Cart'


export const Product = () => {

  const { getProduct, product, addProductCart, cart } = useContext(ProductContext)
  const { user } = useContext(UserContext)
  const { id } = useParams()

  const handleAddProductCart = () => {
    let cartCounter = {};

    cart.forEach(function (product) {
      if (!cartCounter.hasOwnProperty(product.name)) {
        cartCounter[product.name] = 0
      }
      cartCounter[product.name] += 1;
    });
    if (cartCounter[product.name]>=product.stock) {
      Swal.fire(
        "We're sorry",
        `Not enough stock in Warehouse `,
        "warning"
      );
    } else addProductCart(product);
  };

  useEffect(() => {
    getProduct(id)
  }, [getProduct])


  console.log(product);
  return (
    <div className='shopPage'>
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.imgUrl} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">In stock: {product.stock}</p>
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
          {user ?
            (<button onClick={() => {
              handleAddProductCart()
              window.localStorage.setItem('CART', JSON.stringify(cart))
            }} type="button" className="btn btn-warning">Añadir al carrito</button>)
            :
            (<Link to="/login" type="button" className="btn btn-warning">Añadir al carrito</Link>)}
        </div>
      </div>
      <Cart />
    </div>
  )
}
