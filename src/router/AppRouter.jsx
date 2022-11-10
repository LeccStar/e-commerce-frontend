import {Navigate, Route, Routes} from 'react-router-dom'
import Login from '../components/Login/Login'
import { Product } from '../components/Product/Product'
import Home from '../components/Home/Home'
import NotFound from '../components/NotFound/NotFound'
import Account from '../components/Account/Account'

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='products' element={<Product/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default AppRouter