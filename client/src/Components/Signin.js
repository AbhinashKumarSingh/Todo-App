//import { json } from 'body-parser';
import React, { useState, } from 'react'
//import { Heading } from './Heading';
//import {useAlert} from 'react-alert';
import { useHistory } from 'react-router';
//import Signup from './Signup'
function Signin(){
    const history=useHistory();
    //const alert=useAlert();
    const [user,setUser]=useState({
        email:"",
        password:""
    });

    // const [email,setEmail]=useState();
    // const [password,setPassword]=useState();
    let name,value;
    const onChange=(e)=>{
        name=e.target.name;
        value=e.target.value;
                setUser({...user,[name]:value})
    }
  
    
const handleRequest=async(e)=>{
    const {email,password}=user;
    e.preventDefault();
    
   const res=await fetch ("http://localhost:5000/Signin", {
        method: "POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({  
          email:email ,
          password:password
       })
   })

   //setShow(true);
   const data=await res.json();
   console.log(data)
   if(data.status===200)
   {
    window.alert(data.message);
    //history.push("/BoardsManagement");
    history.push("/BoardsManagement")
       
   }
   else if(data.status===400 || data.status===401 || data.status===404){
    window.alert(data.message);
   }
   //history.push("/BoardsManagement");
   
//    alert.show("sign");
//     return data.message;
   //console.log(data.message);
}
    return (
        <>
        
       <div className='card'>
       <div className='card1'> 
        <div class="container" id="wrap">
	  <div class="row">
        <div >
            <form  method="post"  class="form" >   
                    <h4>Sign In</h4>
                    <div class="row">
                        
                    <input type="email" name="email"  class="form-control input-lg" placeholder="Your Email"  
                        value={user.email}
                        onChange={onChange}
                    /><br></br>
                    <input type="password" name="password"  class="form-control input-lg" placeholder="Password"  
                        value={user.password}
                        onChange={onChange}
                    /><br></br>
                    <br></br> 
                                       
                                       
                        </div>
                        <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit"
                        onClick={handleRequest}>
                        
                    Sign in</button>
             </form>  </div> </div> </div></div></div>  </>
    )

}
export default Signin;