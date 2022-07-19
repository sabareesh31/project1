import React from 'react';
import {Link} from 'react-router-dom';
import Header1 from './header1';
import axios from 'axios';
import Allparchase from './purchase_db_fletch';


export default class Purchase extends React.Component
{

    state = {
        s_id:"",
        bill_no : "",
        bill_date :"",
        prod_id :"",
        bill_amount :"", 
        paid_amount :""
    }
    gets_id=(Event)=>{
        this.setState({s_id:Event.target.value});
        console.log(this.state.s_id);
    }
    getbill_no=(Event)=>{
        this.setState({bill_no:Event.target.value});
        console.log(this.state.bill_no);
    }

    getbill_date=(Event)=>{
        this.setState({bill_date:Event.target.value});
        console.log(this.state.bill_date);
    }

    getprod_id=(Event)=>{
        this.setState({prod_id:Event.target.value});
        console.log(this.state.prod_id);
    }

    getbill_amount=(Event)=>{
        this.setState({bill_amount:Event.target.value});
        console.log(this.state.bill_amount);
    }

    getpaid_amount=(Event)=>{
        this.setState({paid_amount:Event.target.value});
        console.log(this.state.paid_amount);
    }
    submitdata(){
        const sdata = {
            s_id:this.state.s_id,
            bill_no:this.state.bill_no,
            bill_date:this.state.bill_date,
            prod_id:this.state.prod_id,
            bill_amount:this.state.bill_amount,
            paid_amount:this.state.paid_amount,
        }
        
        axios.post("http://localhost:3001/insertdata",sdata).then((response)=>{
            console.log(response);
        });
        alert('Successfully Done')
    }

    render(){
        return(
            <div className='car'>
                <Header1/> 
                <h1 className='ph'>Purchase Details</h1>
                <div className='card3 row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-3'>
                        <label>Suppliyer ID :</label> <input type="text" onChange={this.gets_id}/>
                    </div>
                    <div className='col-sm-3'>
                        <label>Bill No :</label> <input type="text" className='inp1' onChange={this.getbill_no}/>
                    </div>
                    <div className='col-sm-3'>
                        <label>Bill Date :</label> <input type="text" className='inp2' onChange={this.getbill_date}/>
                    </div>
                </div>
                <div className='card3 row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-3'>
                        <label>Product ID :</label> <input type="text" className='inp3' onChange={this.getprod_id}/>
                    </div>
                    <div className='col-sm-3'>
                        <label>Bill Amount :</label> <input type="text" onChange={this.getbill_amount}/>
                    </div>
                    <div className='col-sm-3'>
                        <label>Paid Amount :</label> <input type="text" onChange={this.getpaid_amount}/><br/><br/><br/>

                            <svg className=''xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                                <i class="bi bi-check2  text-success"></i>
                                <div><input type="submit" value="Paid" className='paid' onClick = {this.submitdata.bind(this)} /></div>
                    </div>
                    <div className='col-sm-5'>
                        <Link to='/admin'><button className='back'>Back</button></Link>
                    </div>   
                </div><br/><br/><br/><br/><br/>
                <Allparchase />
            </div>
        )
    }
}