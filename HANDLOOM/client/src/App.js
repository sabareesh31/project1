import React from 'react';
import ReactDom from "react-dom/client";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Component/login';
import Admin from "./Component/admin";
import Header from './Component/header';
import Customer from './Component/user_dash';
import Supplayer from './Component/supplayerdash';
import Product from './Component/product';
import Suppliyer from './Component/supplier';
import Purchase from './Component/purchase';
import Home from './Component/home';
import Registration from './Component/registration';
import Allregistration from './Component/registration_db_fletch';
import Alllogin from './Component/login_db_fletch';



export default function App (){
 
  
    return(

       
        <div>
         
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/header' element={<Header/>}/>
            <Route path='/login' element={<Login />}/> 
            {/* <Route path='/login' element={<Login />}/> */}
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/user_dash' element={<Customer/>}/>
            <Route path='/supplayerdash' element={<Supplayer/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/supplier' element={<Suppliyer/>}/>
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/registration_db_fletch' element={<Allregistration/>}/>
            <Route path='/login_db_fletch' element={<Alllogin/>}/>
          </Routes>
        </BrowserRouter>
          
         
          
        </div>
    );
  }


const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);
