import React, { useState } from 'react';
import { useHistory } from 'react-router';
//import { Heading } from './Heading';
 function  Signup(){
    const history=useHistory();
    const [user,setUser]=useState({
        fname:"",
            lname:"",
          email:"" ,
          password:"",cpassword:"",
          dob:"",phone :"" 

    });
    let name,value;
  const  onChange = (e) => {
      name=e.target.name;
      value=e.target.value;
        setUser({...user, [name]: value });
      }
    
const handleRequest=async(e)=>{
    const {
        fname,
            lname,
          email ,
          password,cpassword,
          dob,phone 
    }=user;
    e.preventDefault();
   const res=await fetch ("http://localhost:5000/Signup", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            fname:fname,
            lname:lname,
          email:email ,
          password:password,cpassword:cpassword,
          dob:dob,phone :phone  
       })
   })
   const data=await res.json();
   console.log(data);
   if(data.status===200)
   {
       window.alert(data.message);
       history.push('/Signin')
   }
   else{
    window.alert(data.message);
   }
}


    return (
        <>
        
        
           <div className='card'> 
        <div className="container" id="wrap">
	  <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <form  method="post"  className="form" >   
                    <h4>Signup</h4>
                    <div className="row">
                        <div className="name">
                            <input type="text" name="fname"  className="form-control input-lg" placeholder="First Name" 
                            value={user.fname} 
                                onChange={onChange}
                            />                        </div>
                        <div className="lastname">
                            <input type="text" name="lname"  className="form-control input-lg" placeholder="Last Name" 
                            value={user.lname} 
                                onChange={onChange} />                        </div>
                    </div>
                    <input type="email" name="email"  className="form-control input-lg" placeholder="Your Email" 
                    value={user.email} 
                    onChange={onChange} /><br></br>
                    <input type="password" name="password"  className="form-control input-lg" placeholder="Password" 
                    value={user.password} 
                     onChange={onChange} /><br></br>
                    <input type="password" name="cpassword"  className="form-control input-lg" placeholder="Confirm Password" 
                    value={user.cpassword} 
                    onChange={onChange} /><br></br> 
                   <input type="number" name="phone"  className="form-control input-lg" placeholder="Phone no." 
                    value={user.phone} 
                    onChange={onChange} /><br></br>
                                       
                        
                        <div>
                        <label>Birth Date</label>
                        <br></br>
                        <input type='date' name='dob'
                        value={user.dob}
                        onChange={onChange}></input>
                        </div>
                        
                            
                    
                    
  
                    <br />
              <span className="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
                    <br></br><button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={handleRequest}>
                        Create my account</button>
            </form> 
                     
          </div>
</div>            
</div>
</div>
            
</>
        
    )
}


export default Signup;