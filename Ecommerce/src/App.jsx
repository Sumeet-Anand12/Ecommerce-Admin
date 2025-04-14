import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header/Header'
import "./assets/css/responsive.css"
import { Route, Routes } from 'react-router-dom'
import Home from "../../Ecommerce/src/pages/Home"
import PrivateRoute from './privateRote/PrivateRoute'
import Login from './components/userAuth/Login'

function App() {

  const [isAuthenticate, setIsAuthenticate]=useState(true)
  

  return (
    
      <div className='main-container'>
      
       <Routes>
              {
                !isAuthenticate?(
                  <>
      
                   <Route path='/login' element={<Login />} />
                  
                  </>
                ):(
                  <>
                  <Route path='' element={<PrivateRoute isAuthenticate={isAuthenticate} />}>
                   <Route path='' element={<Home />} />
                  
                  </Route>
                   
                   </>
                )
              }
              </Routes>  
            
      </div>
  
  )
}

export default App
