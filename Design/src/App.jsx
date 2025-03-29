import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from './assets/newComponents/signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './assets/newComponents/Login'
import Navbar from './assets/newComponents/Navbar'
import Home from './assets/newComponents/Home'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Genaral from './assets/newComponents/Landing'
import Mens from './assets/newComponents/mens'
import Women from './assets/newComponents/women'
import Cart from './assets/newComponents/cart'
import Checkout from './assets/newComponents/checkout'
import Invoice from './assets/newComponents/Invoice'
import UserOrders from './assets/newComponents/Orders'


function App() {
  const [count, setCount] = useState(0)
  const id=localStorage.getItem("loginId")

  return (
    <>
    <Router>
      <Routes>
          {/* {id?
            
            <Route path='/' element={<Cart />}/>
            
            :
              <Route path='/'element={<Home />}/>

            
          } */}

         <Route path='/'element={<Home />}/>
        <Route path='/Login' element={<Login />}/>  
        <Route path='/signup' element={<Sign />}/>
        <Route path='/Landing' element={<Genaral />}/>
        <Route path='/mens' element={<Mens />}/>
        <Route path='/women' element={<Women />}/>
         <Route path='/cart' element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path='/Orders' element={<UserOrders />} />
       
      </Routes>
    </Router>
    
    </>
  )
}

export default App
