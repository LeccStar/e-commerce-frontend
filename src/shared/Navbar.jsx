import { useEffect } from 'react';
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext'
import robot from "./robot.png"

const Navbar = () => {

  const { user, logoutContext, verifyToken } = useContext(UserContext);
  const {verifyCart, emptyCart} = useContext(ProductContext)

  useEffect(() => {
    verifyToken()
    emptyCart()
  }, [verifyToken])

  useEffect(() => {
    verifyCart()
  }, [verifyCart])

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={robot} className="bi me-2" width={40} height={32} aria-label="Bootstrap"></img>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {user ? (
              <li><NavLink to="/" className="nav-link px-2 text-white">¡Hola, {user.name}!</NavLink></li>
            ) : <></>}
            <li><NavLink to="/home" className="nav-link px-2 text-secondary">Home</NavLink></li>
            {
              user ? (
                <><li><NavLink to="/profile" className="nav-link px-2 text-white">Profile</NavLink></li>
                </>
              ) : <></>
            }
            <li><NavLink to="/categories" className="nav-link px-2 text-white">Products</NavLink></li>
            <li><NavLink to="/" className="nav-link px-2 text-white">FAQs</NavLink></li>
            <li><NavLink to="/" className="nav-link px-2 text-white">About</NavLink></li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="text-end">
            {
              user ? (<>
                <NavLink onClick={logoutContext} to={"/home"} type="button" className="btn btn-warning">Log-out</NavLink>
              </>) : <> <NavLink to={"/login"} type="button" className="btn btn-outline-light me-2">Login</NavLink>
                <NavLink to={"/account"} type="button" className="btn btn-warning">Sign-up</NavLink>
              </>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar