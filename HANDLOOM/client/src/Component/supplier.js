import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header1 from './header1';
import Allsupplier from './supplier_db_fletch';

export default class Suppliyer extends React.Component{

        state = {
            // s_id:"",
            c_name : "",
            c_addr:"",
            c_phone:"",
            c_Email:"", 
            p_name:""

        }
        // gets_id=(Event)=>{
        //     this.setState({s_id:Event.target.value});
        //     console.log(this.state.s_id);
        // }
        getc_name=(Event)=>{
            this.setState({c_name:Event.target.value});
            console.log(this.state.c_name);
        }
                        
        getc_addr=(Event)=>{
            this.setState({c_addr:Event.target.value});
            console.log(this.state.c_addr);
        }

        getc_phone=(Event)=>{
            this.setState({c_phone:Event.target.value});
            console.log(this.state.c_phone);
        }

        getc_Email=(Event)=>{
            this.setState({c_Email:Event.target.value});
            console.log(this.state.c_Email);
        }

        getp_name=(Event)=>{
            this.setState({p_name:Event.target.value});
            console.log(this.state.p_name);
        }
        submitdata(){
            const sdata = {
                // s_id:this.state.s_id,
                c_name:this.state.c_name,
                c_addr:this.state.c_addr,
                c_phone:this.state.c_phone,
                c_Email:this.state.c_Email,
                p_name:this.state.p_name,
            }
            
            axios.post("http://localhost:3001/insertdata",sdata).then((response)=>{
                console.log(response);
               
            });
            alert('Successfully Submit')
        }

    render(){


        return(
            <div>
                <Header1/>
                <h1 className='h11'>Supplier Details</h1>
                <div className='prod row'>
                    <div className='col-sm-2'></div>
                    {/* <div className='col-sm-3'>   
                        <label>Suppliyer ID:</label> <input type="text" onChange={this.s_id}/> 
                    </div> */}
                    <div className='col-sm-3'>
                        <label>Company Name :</label> <input type="text" onChange={this.getc_name}/>  
                    </div>
                    <div className='col-sm-3'>
                        <label>Address :</label> <input type="text" onChange={this.getc_addr}/>
                    </div>
                </div>
                <div className='prod row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-3'>
                        <label>Phone Number :</label> <input type="text" onChange={this.getc_phone}/> 
                    </div>
                    <div className='col-sm-3'>
                        <label>E Mail ID :</label> <input type="text" onChange={this.getc_Email}/> 
                    </div>
                    <div className='col-sm-3'>
                        <label>Person Name :</label> <input type="text" onChange={this.getp_name}/> 
                    </div>
                </div>
                    <div className='prod col-sm'>
                        <input className='sub' type="submit" value="submit" onClick = {this.submitdata.bind(this)}></input>
                    </div>
                    <div className='col-sm-5'>
                        <Link to='/admin'><button className='back'>Back</button></Link>
                    </div><br/><br/><br/><br/><br/>
                        <Allsupplier />
            </div>
            
        )
    }
}