import { Link } from 'react-router-dom';
import Header1 from './header1';
import React from 'react';
import axios from 'axios';
import Allproducts from './products_db_fletch';


export default class Product extends React.Component
{
    state = {
        prod_name:"",
        s_id : "",
        p_type :"",
        price :"",
        material :"", 
        catagories :""
    }
    getprod_name=(Event)=>{
        this.setState({prod_name:Event.target.value});
        console.log(this.state.prod_name);
    }
    gets_id=(Event)=>{
        this.setState({s_id:Event.target.value});
        console.log(this.state.s_id);
    }

    getp_type=(Event)=>{
        this.setState({p_type:Event.target.value});
        console.log(this.state.p_type);
    }

    getprice=(Event)=>{
        this.setState({price:Event.target.value});
        console.log(this.state.price);
    }

    getmaterial=(Event)=>{
        this.setState({material:Event.target.value});
        console.log(this.state.material);
    }

    getcatagories=(Event)=>{
        this.setState({catagories:Event.target.value});
        console.log(this.state.catagories);
    }
    submitdata(){
        const sdata = {
            prod_name:this.state.prod_name,
            s_id:this.state.s_id,
            p_type:this.state.p_type,
            price:this.state.price,
            material:this.state.material,
            catagories:this.state.catagories,
        }
        axios.post("http://localhost:3001/insertdata",sdata).then((response)=>{
            console.log(response);
        });
        alert('Successfully Uploaded')
    }


    render(){
        return(
            
            <div>
                <Header1/>
                <h1 className='h11'>Products Details</h1>
                <div className='prod row'>
                    <div className='col-sm-2'></div>
                    {/* <div className='col-sm-3'>
                        <label>Product ID :</label>  <input type="text"/>
                    </div> */}
                    <div className='col-sm-3'>
                        <label>Product Name :</label>  <input type="text" onChange={this.getprod_name}/>
                    </div>
                    <div className='col-sm-3'>
                        <label>Suppliyer ID :</label>  <input type="text"onChange={this.gets_id}/>
                    </div>             
                </div>

                <div className='prod row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-3'>
                        <label>Categories :</label> <select  className='inp' onChange={this.getcatagories}>
                            <option value="Select">Select</option>
                            <option value="Sarees">Men</option>
                            <option value="Cloths">Women</option>
                        </select>
                    </div>
                    <div className='col-sm-3'>
                        <label>Product Type  : </label>  <select  className='inp' onChange={this.getp_type}>
                            <option value="Select1">Select</option>
                            <option value="Sarees">Sarees</option>
                            <option value="Cloths">Cloths</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Dhotis">Dhotis</option>
                        </select>
                    </div>
                    <div className='col-sm-3'>
                        <label>Price :</label>  <select  className='inp' onChange={this.getprice}>
                            <option value="Select2">Select</option>
                            <option value="P.Price">Product Price</option>
                            <option value="S.Price">Selling Price</option>
                        </select>
                    </div>
                </div>
                <div className='prod row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-3'>
                        <label className="tab">Material :  </label> <select className='inp' onChange={this.getmaterial}>
                            <option value="Select3">Select</option>
                            <option value="Pure Cotton">Pure Cotton</option>
                            <option value="Mixed Cotton">Mixed Cotton</option>
                            <option value="Silk Cotton">Silk Cotton</option>
                        </select>
                    </div>
                </div><br/>
                <div className='col-sm'>
                    <input className='sub' type="submit" value="submit" onClick = {this.submitdata.bind(this)}></input>
                </div>
                <div className='col-sm-5'>
                        <Link to='/admin'><button className='back'>Back</button></Link>
                    </div><br/><br/><br/><br/><br/><br/>
                    <Allproducts />
            </div>
        )
    }
}