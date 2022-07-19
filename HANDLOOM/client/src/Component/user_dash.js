import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';

export default class Customer extends React.Component{
    render(){
        return(
            
    <div>
        <div className="row">
            <div className="bg col-sm-3  ">

                <ul>
                    <li className='mar'>USER</li>
                    <li className='mar1'>Home</li>
                    <li className='mar1'>Products</li>
                    
                    <li className='mar1'>User Info</li>
                    <li className='mar1'>Delivary</li>
                    <li className='mar3'>
                    <Link to="/login"><span >Log Out</span>
                    </Link>
                    </li>
                </ul>
           
            </div>


        
        <div className="col-sm-9">
            <div className="card2 row">
                <a className="" href="#">Dashboard</a>

                <div className="card1 ">
                    <input className="x" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </div>
    
      </div>
    </div>

            
        )
    }
}