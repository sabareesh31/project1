import React from 'react';
import Axios from 'axios';

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
        }
        Axios.post("http://localhost:3001/login",{uname: datastring.username,pwd:datastring.password}).then((response)=>
        {alert(response)});
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.getusername}/>
                <input type="password" onChange={this.getpassword}/>
                <input type="button" onClick={this.login.bind(this)} value="Login"/>  
            </div>
        );
    }
}






// node



const exp=require('express');
const mys=require('mysql');
const app=exp();

const cors=require("cors");
const{response}=require('express')
app.use(cors());
app.use(exp.json());


const c=mys.createConnection({
    host:"localhost",
    user:"root",
    password:"sabariz31",
    database:"sample"  
});

c.connect(function(err){
    if(err){console.log(error);}
    else{console.log('ok');}
});

app.post("/login",(request,response)=>{
    const username= request.body.uname;
    console.log(username);
    const password=request.body.pwd;
    console.log(request.body.pwd);
    const a=c.query("select * from logn where username=? and password=?",["admin","admin"],
    // const a=c.query("select * from logn where role_id=?",["role_id"],
     function(error,result){
         if(error){
           console.log("error.code");
              const s={status :'error'}
              response.send(s);
         }
         else{
            response.send(result);} 
        });
    //         const username1=rows[0].username;
    //         const password1=rows[0].password;
    //         const role1=rows[0].role;
    //         if(username2==username1 && password2==password1){
    //             if(role1=='1'){
    //                 const s={status :'pass','role':'admin'};
    //                 response.send(s);
    //             }
    //             else if(role1=='2'){
    //                 const s={status :'pass','role':'staff'};
    //                 response.send(s);
    //             }
    //         }
    //         else{
    //             const s={status:'error'};
    //             response.send(s);
    //         }
    //     }

//    });
});

app.listen(3001);
