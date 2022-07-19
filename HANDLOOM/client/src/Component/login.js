import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export  default class Login extends React.Component
{
    state={
        username :"",
        password :""
    };
    getusername=(Event)=>{
        this.setState({username:Event.target.value});
        console.log(this.state.username);
    }

    getpassword=(Event)=>{
        this.setState({password:Event.target.value});
        console.log(this.state.password);
    }

    login(){
        const datastring={
            username : this.state.username,
            password : this.state.password
        };
        Axios.post("http://localhost:3001/login",datastring).then((response)=>{
        // {alert(response)});
        let a = response.data.status;
        let b = response.data.role;
        if(a == 'pass'){
            if(b == 'admin'){
                window.location.href='./admin';
            }
            else if(b == 'supplayer'){
                window.location.href='./supplayer';
            }
             else if(b == 'customer'){
                window.location.href='./user_dash';
            }
        }
        else{
           alert(a);
        }
        
    });
    }

    render(){
        return(
            <div className="log-bg ">
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-3 log-bg1'>
                        <label className='log-inp1'>E-Mail ID :</label><br/>
                        <input type="text" onChange={this.getusername} placeholder="Enter Your E-Mail" className="log-inp form-control"/><br/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-3 log-bg1'>
                        <label className='log-inp1'>Password :</label><br/>
                        <input type="password" onChange={this.getpassword} placeholder="Enter Your Password" className=" form-control  log-inp"/><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className='col-sm-4'></div>
                    <div className='col-sm-3 log-bg1'>
                        <input type="button" onClick={this.login.bind(this)} value="Login" className='btn btn-primary ml-5 '/> 
                        <Link to='/registration'><button className='btn btn-primary ml-5'>New Account</button> </Link>
                    </div>              
                </div>
            </div>
        );
    }
}
