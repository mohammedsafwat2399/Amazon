 import React, { useEffect } from 'react'
 import { Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Header from './components/header/Header';
import { auth } from './firebase';
import {useAuth} from "./contecxt/GlobalState"
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import { Payment } from './components/payment/Payment';
   
 
 const App = () => {
 
  const {dispatch} =useAuth()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[dispatch])
   return (
     <div className='app'>
      <Routes>
        <Route path='/' element={<>
          <Header/>
          <Home/>
        </>}/>
        <Route path='/checkout' element={<>
        <Header/>
        <Checkout/>
        </>}/>
        <Route path='/payment' element={<>
        <Header/>
         <Payment/>
         
        </>}/>
        
        <Route path='/login' element={<Login/>}/>
         <Route path='*' element={<h1> page is not found</h1>} />
      </Routes>
       </div>
   )
 }
 
 export default App