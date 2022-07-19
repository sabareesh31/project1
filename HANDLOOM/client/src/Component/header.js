import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';


export default class Header extends React.Component{
    render(){
        return(

        <div>

           <div className='h-bg1'>
                <div className='d-flex flex-row'>
                    <img src={require("../image/imageslogo.jpg")} alt="Logo" className="ha-img"/>
                   

                    
                

                    <h5 class="h-h1">Handloom Producz</h5>
                    <Link to="/login"><button className="h-bt">Account</button></Link>
                    <img src={require("../image/National-Handloom-Day-logo.webp")} alt="Logo" className="h-img1"/>

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
           </div>
                        
                        
           </div>
        )
    }
}

 