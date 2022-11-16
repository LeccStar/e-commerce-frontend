import {Navigate, Route, Routes} from 'react-router-dom'
import Login from '../components/pages/Login/Login'
import { Product } from '../components/pages/Product/Product'
import Home from '../components/pages/Home/Home'
import NotFound from '../components/NotFound/NotFound'
import Account from '../components/pages/Account/Account'
import UserProvider from '../context/UserProvider'
import Navbar from '../shared/Navbar'
import PrivateRoute from './PrivateRoute'
import Profile from '../components/pages/Profile/Profile'

const AppRouter = () => {
  return (
    <UserProvider>
      <Navbar/>
    <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='products' element={<Product/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='profile' element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        } />
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </UserProvider>
  )
}

export default AppRouter