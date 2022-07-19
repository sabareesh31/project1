import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import Regimg from '../image/pexels-pixabay-459486.jpg';

export default class Registration extends React.Component
{

    state = {
        first_name :"",
        last_name : "",
        Email_id :"",
        password :"",
        phone_no :"",
        address :"", 
        state :"",
        zip_code :""
    }
    getfirst_name=(Event)=>{
        this.setState({first_name:Event.target.value});
        console.log(this.state.first_name);
    }

    getlast_name=(Event)=>{
        this.setState({last_name:Event.target.value});
        console.log(this.state.last_name);
    }

    getEmail_id=(Event)=>{
        this.setState({Email_id:Event.target.value});
        console.log(this.state.Email_id);
    }

    getpassword=(Event)=>{
        this.setState({password:Event.target.value});
        console.log(this.state.password);
    }

    getphone_no=(Event)=>{
        this.setState({phone_no:Event.target.value});
        console.log(this.state.phone_no);
    }

    getaddress=(Event)=>{
        this.setState({address:Event.target.value});
        console.log(this.state.address);
    }

    getstate=(Event)=>{
        this.setState({state:Event.target.value});
        console.log(this.state.state);
    }

    getzip_code=(Event)=>{
        this.setState({zip_code:Event.target.value});
        console.log(this.zip_code.state);
    }

    submitdata(){
        const sdata = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            Email_id:this.state.Email_id,
            password:this.state.password,
            phone_no:this.state.phone_no,
            address:this.state.address,
            state:this.state.state,
            zip_code:this.state.zip_code,
        }
         
        
        axios.post("http://localhost:3012/insertdata",sdata).then((response)=>{
            console.log(response);
        });
        alert('Successfully Submited');
    }
    render(){
        return(
            <div className="reg-back col"> 
            <div>
            {/* style={{backgroundImage:`url(${Regimg})` }}> */}
                <h3 className="reg-h1 ">Your Personal Details</h3>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3 reg-inp ">
                        <label className="">First Name : </label><br/><input className="reg-inp3 " type="text" placeholder="Enter Your First Name" onChange={this.getfirst_name}/><br/>  {/*className="form-control"*/}
                        <label className="reg-inp1">Address : </label><br/><input className="reg-inp3" type="text" placeholder="Enter Your Address" onChange={this.getaddress}/><br/>
                        <label className="reg-inp1">PinCode : </label><br/><input className="reg-inp3" type="text" placeholder="Enter PinCode" onChange={this.getzip_code}/><br/>
                        {/* <label className="reg-inp1">Gender :</label><input type="radio" value="Male"/><label for="Male">Male</label><br/> */}
                        <label className="reg-inp1">E-Mail ID : </label><br/><input className="reg-inp3" type="text" placeholder="Enter E-Mail ID" onChange={this.getEmail_id}/>
                    </div>

                    <div className="col-sm-3 reg-inp ">
                        <label className="">Last Name : </label><br/> <input className="reg-inp3" type="text" placeholder="Enter Your Last Name" onChange={this.getlast_name}/><br/>
                        <label className="reg-inp1">State : </label><br/> <input className="reg-inp3" type="text" placeholder="Enter State" onChange={this.getstate}/><br/>
                        <label className="reg-inp1">Phone No : </label><br/> <input className="reg-inp3" type="text" placeholder="Enter Phone No" onChange={this.getphone_no}/><br/>
                        {/* <input type="radio" value="Female" className="reg-inp1"/><label for="Female">Female</label><br/> */}
                        <label className="reg-inp1">Password :</label><br/><input className="reg-inp3" type="password" placeholder="Enter Password" onChange={this.getpassword}/>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3 ">
                        <input type="submit" value="Submit Form" className="reg-inp2" onClick = {this.submitdata.bind(this)}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}