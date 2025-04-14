import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './component/login/Login'
import PrivateRoute from './privateRoute/PrivateRoute'
import DashboardRight from './pages/dashboardRight'
import UserPage from './pages/user'
import ProductPage from './pages/product'
import Category from './pages/category'
import BannerPage from './pages/banner'
import BrandPage from './pages/brand'
import Cart from './pages/cart'
import OrderPage from './pages/order'
import AddCategory from './component/categoryPage/AddCategory'

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated]=useState(true)

  return (
    <>
      
      <Routes>
        {
          !isAuthenticated?(
            <>

             <Route path='/login' element={<Login />} />
            
            </>
          ):(
            <>
            <Route path='' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
             <Route path='/dashboard' element={<DashboardRight />} />
             <Route path='/user' element={<UserPage />} />
             <Route path='/product' element={<ProductPage/>} />
             <Route path='/category' element={<Category/>} />
             <Route path='/banner' element={<BannerPage/>} />
             <Route path='/brand' element={<BrandPage/>} />
             <Route path='/cart' element={<Cart/>} />
             <Route path='/order' element={<OrderPage/>} />
             <Route path='/add-category' element={<AddCategory/>} />
            
            </Route>
             
             </>
          )
        }
        </Routes>  
      
    </>
  )
}

export default App
