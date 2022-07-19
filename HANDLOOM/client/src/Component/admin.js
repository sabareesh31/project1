import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';
import Header1 from './header1';

export default class Admin extends React.Component{
    render(){
        return(
            
    <div>
        <Header1/>
        <div className="row">
            <div className="bg col-sm-2 ">

                <ul>
                    <li className='mar'>ADMIN</li>
                    <Link to='/product'><li className='mar1'>Products</li></Link>
                    <Link to='/purchase'><li className='mar1'>Purchase Details</li></Link>
                    <Link to='/supplier'><li className='mar1'>Suppliyer details</li></Link>
                    <li className='mar1'>Delivary</li>
                    <Link to='/registration_db_fletch'><li className='mar1'>Registration</li></Link>
                    <Link to='/login_db_fletch'><li className='mar1'>Login Details</li></Link>
                    <li className='mar2'>
                    {/* <Link to="/login"><span >Log Out</span>
                    </Link> */}
                    </li>
                </ul>
           
            </div>


            
            {/* <div className="row col-sm-10">
                <div className=" col-sm-5 ">
                    <div class="dropdown">
                        <button class="a-btn btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                            Woman
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p class="dropdown-item" href="#">Action</p>
                            <p class="dropdown-item" href="#">Another action</p>
                            <p class="dropdown-item" href="#">Something else here</p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5'>
                    <div class=" dropdown">
                        <button class="a-btn a-dd btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                            Men
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to='/Silk Sarees'><p class="dropdown-item">Silk</p></Link>
                            <p class="dropdown-item" href="#">Another action</p>
                            <p class="dropdown-item" href="#">Something else here</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>       
    </div>

            
        )
    }
}