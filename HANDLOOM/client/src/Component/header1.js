import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Navbar from './navbar';
import Home from './home';

export default class Header1 extends React.Component{
    render(){
        return(

           <div>

            <div className='bg1 row'>
                <div className='col-sm-2'>
                    <img src={require("../image/imageslogo.jpg")} alt="Logo" className="img"/>
                </div>                   
                    <div className='col-sm-5'>
                        <h5 class="h1">Handloom Producz</h5>
                    </div>
                    <Link to="/login"><button className="bt">Log Out</button></Link>
                    <div className='col-sm-1'>
                        <img src={require("../image/National-Handloom-Day-logo.webp")} alt="Logo" className="head_img"/>
                    </div> 










                   {/* <div class="row">
                        <div class="col-sm-2">
                            <img src={require("../image/imageslogo.jpg")} alt="Logo" className="img"/>
                        </div>
                        <div class="col-sm-2">
                            <h5 class="h1">Handloom Producz</h5>
                        </div>
                        <div class="col-sm-2">
                            <Link to="/login"><button>Account</button></Link>
                        </div>
                        <div class="col-sm-2">
                            <img src={require("../image/National-Handloom-Day-logo.webp")} alt="Logo" className="img1"/>
                        </div>
                     </div> */}
                </div>
           
                        <Navbar/>
                        {/* <Home/> */}
           </div>
        )
    }
}

 