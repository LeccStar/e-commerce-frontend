import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/pages/Login/Login'
import { Product } from '../components/pages/Product/Product'
import Home from '../components/pages/Home/Home'
import NotFound from '../components/NotFound/NotFound'
import Account from '../components/pages/Account/Account'
import UserProvider from '../context/UserProvider'
import Navbar from '../shared/Navbar'
import Footer from "../shared/Footer";
import PrivateRoute from './PrivateRoute'
import Profile from '../components/pages/Profile/Profile'
import PublicRoutes from './PublicRoutes'
import Products from '../components/pages/Product/Products'
import ProductProvider from '../context/ProductProvider'

const AppRouter = () => {

  <Navigate to={"/home"}/>
  return (
    <UserProvider>
      <ProductProvider>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='Categories' element={<Products />} />
        <Route path='login' element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } />
        <Route path='account' element={<Account />} />
        <Route path='profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      </ProductProvider>
    </UserProvider>
  )
}

export default AppRouter