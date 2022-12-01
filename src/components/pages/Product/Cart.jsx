import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductContext'
import { UserContext } from '../../../context/UserContext'
import { BsFillFileMinusFill, BsFillFilePlusFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useEffect } from 'react';


const Cart = () => {

  const {user}= useContext(UserContext) 

  const{cart,addProductCart, deleteProductCart, deleteOneProductCart, emptyCart} = useContext(ProductContext)

  useEffect(()=>{
    emptyCart()
  },[])

  let cartCounter = {};

  cart.forEach(function(product) {
    if (!cartCounter.hasOwnProperty(product.name)) {
      cartCounter[product.name] = 0
    }
    cartCounter[product.name] += 1;
  });

  let result = cart.filter((item, index)=>{
    return cart.findIndex((element)=> element.name ===item.name) === index 
  })

  const handleAddProductCart = (product) => {
    addProductCart(product);
  };

  const handdleDeleteProductCart = (id)=> {
    deleteProductCart(id)
    console.log(cart);
  }

  const handleDeleteOneProductCart = (product)=>{
    deleteOneProductCart(product)
  }
  console.log(result);

  return (
<section className="h-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
          </div>
        </div>
        {result.map((product)=>{
          return         <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2 colShopPage">
                <img src={product.imgUrl} className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 colShopPage">
                <p className="lead fw-normal mb-2">{product.name}</p>
                <p><span className="text-muted">Size: {cartCounter[product.name]} </span>M <span className="text-muted">Color: </span>Grey</p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex colShopPage">
                <button onClick={()=>{handleDeleteOneProductCart(product)}} className="btn btn-link">
                <i className="fas fa-minus"><BsFillFileMinusFill/></i>
                </button>
                <input id="form1" min={1} name="quantity" value={cartCounter[product.name]} type="number" className="form-control form-control-sm" />
                <button onClick={()=>{handleAddProductCart(product)}} className="btn btn-link px-2">
                  <i className="fas fa-plus"><BsFillFilePlusFill/></i>
                </button>
                <button onClick={()=>{handdleDeleteProductCart(product._id)}} className="btn px-3">
                  <AiFillDelete/>
                </button>
              </div>
              {product.discount?
              (<div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 colShopPage">
              <h5 className="mb-0"><s>${product.price}</s>   ${product.price - ((product.discount_percentaje / 100) * product.price)}</h5>
            </div>)
            :
            (<div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 colShopPage">
            <h5 className="mb-0">${product.price}</h5>
          </div>)}
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
              </div>
            </div>
          </div>
        </div>
        })}
        <div className="card mb-4">
          <div className="card-body p-4 d-flex flex-row">
            <div className="form-outline flex-fill">
              <input type="text" id="form1" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form1">Discound code</label>
            </div>
            <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Cart