import React, { useEffect, useState } from "react";
//import { Heading } from "./Heading";
import { useHistory } from "react-router";

const BoardsManagement=()=>{
    const [name,setName]=useState([]);
    const [user,setUser]=useState({
        _id:""
    });
    const [user4,setUser4]=useState({
        _id:""
    });
    const [user3,setUser3]=useState({
        _id:"",
        fname:"",
            lname:"",
          email:"" ,
          
          phone :"" 
    
    });
    
    const history=useHistory();
    const [user1,setUser1]=useState({
        fname:"",
            lname:"",
          email:"" ,
          password:"",cpassword:"",
          dob:"",phone :"" 

    });
    let name0,value0;
  const  onChange1 = (e) => {
      name0=e.target.name;
      value0=e.target.value;
        setUser1({...user1, [name0]: value0 });
      }
    
const handleRequest2=async(e)=>{
    const {
        fname,
            lname,
          email ,
          password,cpassword,
          dob,phone 
    }=user1;
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
      // history.push('/Signin')
   }
   else{
    window.alert(data.message);
   }
}

let name3,value3;
const  onChange3 = (e) => {
  name3=e.target.name;
  value3=e.target.value;
    setUser3({...user3, [name3]: value3 });
  }

const handleRequest3=async(e)=>{
const {
   _id,
    fname,
        lname,
      email ,
      
      phone 
}=user3;
e.preventDefault();
const res=await fetch ("http://localhost:5000/findUpdate", {
    method: "PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        _id:_id,
        fname:fname,
        lname:lname,
      email:email ,
      
      phone :phone  
   })
})
const data=await res.json();
console.log(data);
if(data.modifiedCount===1)
{
   window.alert("User data Updated");
  // history.push('/Signin')
}
else{
window.alert("Not Found");
}
}

    
    
    

    let name2,value1;
    const onChange2=(e)=>{
        name2=e.target.name;
        value1=e.target.value;
                setUser({...user,[name2]:value1})
    }
    let name4,value4;
    const onChange4=(e)=>{
        name4=e.target.name;
        value4=e.target.value;
                setUser4({...user4,[name4]:value4})
    }
   // const history=useHistory();

        const callBoardsManagement=async()=>{
            console.log("hello")
            try{
                const res=await fetch("http://localhost:5000/BoardsManagement", {
                    method:"GET",
                    
                    Accept:"application/json",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    credentials:"same-origin",
                    withCredenetials:true
                    
                })
                   
                   // console.log(response)
                const data=await res.json();
                console.log(data);
                history.push("/BoardsManagement")

            }
            catch (err){
                console.log(err.message)
                //history.push("/Signup")
            }
        }

        useEffect(()=>{
                handleRequest()

        })
        var result;
        const handleRequest=async()=>{
            const res=await fetch("http://localhost:5000/BoardsManagement/data")
                   result=await res.json()
                   // console.log(response)
                 setName(result)
               

            }
          
            
            const handleRequest1=async()=>{
                const {_id}=user;
                //e.preventDefault();
                
               const res=await fetch ("http://localhost:5000/deleteuser", {
                    method: "DELETE",
                    mode:"cors",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({  
                      _id:_id
                   })
               })
            
               //setShow(true);
               const data=await res.json();
               console.log(data)
               
               if(data.deletedCount===1)
               {
                window.alert("Data of User Deleted");
                //history.push("/BoardsManagement");
                //history.push("/BoardsManagement")
                   
               }
               else {
                window.alert("Id Not Found");
               }
               
               //history.push("/BoardsManagement");
               
            //    alert.show("sign");
            //     return data.message;
               //console.log(data.message);
            }

            const handleRequest4=async(e)=>{
                const {_id}=user4;
                e.preventDefault();
                
               const res=await fetch ("http://localhost:5000/find", {
                    method: "POST",
                    mode:"cors",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({  
                      _id:_id
                   })
               })
            
               //setShow(true);
               const data=await res.json();
               setUser3(data)
               console.log(data)
               if(data!==0)
               {
                window.alert("User Found");
                //history.push("/BoardsManagement");
                //history.push("/BoardsManagement")
                   
               }
               else {
                window.alert("User Not Found");
               }
               //history.push("/BoardsManagement");
               
            //    alert.show("sign");
            //     return data.message;
               //console.log(data.message);
            }
        

    return (
        <>
        
        <div ><h1>Welcome To The Page</h1></div>
        <div className='card'> 
        <div className="container" id="wrap">
	  <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <form  method="post"  className="form" >   
                    <h4>Add User To Database</h4>
                    <div className="row">
                        <div className="name">
                            <input type="text" name="fname"  className="form-control input-lg" placeholder="First Name" 
                            value={user1.fname} 
                                onChange={onChange1}
                            />                        </div>
                        <div className="lastname">
                            <input type="text" name="lname"  className="form-control input-lg" placeholder="Last Name" 
                            value={user1.lname} 
                                onChange={onChange1} />                        </div>
                    </div>
                    <input type="email" name="email"  className="form-control input-lg" placeholder="Your Email" 
                    value={user1.email} 
                    onChange={onChange1} /><br></br>
                    <input type="password" name="password"  className="form-control input-lg" placeholder="Password" 
                    value={user1.password} 
                     onChange={onChange1} /><br></br>
                    <input type="password" name="cpassword"  className="form-control input-lg" placeholder="Confirm Password" 
                    value={user1.cpassword} 
                    onChange={onChange1} /><br></br> 
                   <input type="number" name="phone"  className="form-control input-lg" placeholder="Phone no." 
                    value={user1.phone} 
                    onChange={onChange1} ></input><br></br>
                                       
                        
                        <div>
                        <label>Birth Date</label>
                        <br></br>
                        <input type='date' name='dob'
                        value={user1.dob}
                        onChange={onChange1}></input>
                        </div>
                        
                            
                    
                    
  
                    <br />
              <span className="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
                    <br></br><button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={handleRequest2}>
                        Add User</button>
            </form> 
                     
          </div>
</div>            
</div>
</div>
            <div className='card'> 
        <div className="container" id="wrap">
            <h4>Update User Data</h4>
                    <div className="row">
            <form  method="post"  className="form" >   
                    
                   
                    <input type="text" name="_id"  className="form-control input-lg" placeholder="User Id" 
                    value={user4._id} 
                     onChange={onChange4} />
                     <span className="help-block"></span>
                    <br></br><button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={handleRequest4}>
                        Click To Update</button>
                    </form>
                     </div>
                     </div></div>
                     <br></br>
        
        <div className='card'> 
        <div className="container" id="wrap">
	  <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <form  method="put"  className="form" >   

                     <br></br>
                     <div className="name">
                        
                            <input type="text" name="_id"  className="form-control input-lg" placeholder="User Id"
                            value={user3._id} 
                            onChange={onChange3}
                                
                            />  </div>    
                        <div className="name">
                        
                            <input type="text" name="fname"  className="form-control input-lg" placeholder="First Name"
                            value={user3.fname} 
                            onChange={onChange3}
                                
                            />                        </div>
                        <div className="lastname">
                            <input type="text" name="lname"  className="form-control input-lg" placeholder="Last Name" 
                            value={user3.lname} 
                                onChange={onChange3} />                        </div>
                    
                    <input type="email" name="email"  className="form-control input-lg" placeholder="Your Email" 
                    value={user3.email} 
                    onChange={onChange3} /><br></br>
                    <br></br> 
                   <input type="number" name="phone"  className="form-control input-lg" placeholder="Phone no." 
                    value={user3.phone} 
                    onChange={onChange3} ></input><br></br>
                    
                    <br />
              <span className="help-block"></span>
                    <br></br><button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={handleRequest3}>
                        Update Usetr</button>
            </form> 
                     
          </div>
</div>            
</div>
</div>
        



        <div className="delete">
        <input type="text" name="_id"  className="form-control input-lg" placeholder="Enter Id"  
                        value={user._id}
                        onChange={onChange2}
                    />
                    <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit"
                        onClick={handleRequest1}>
                        
                    Delete User By enter _id</button>
        </div>
        
                        <table border="1">
                            <thead>
                                <tr>
                                <th>
                                        _id
                                    </th>
                                    <th>
                                        fname
                                    </th>
                                    <th>
                                        lname
                                    </th>
                                    <th>
                                        email
                                    </th>
                                    <th>
                                        phone
                                    </th>
                                    <th>
                                        dob
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                name.map((val,i)=>(
                                <tr key={i}>
                                
                                    <td key={val._id}>{val._id}</td>
                                    <td key={i}>{val.fname}</td>
                                    <td key={i}>{val.lname}</td>
                                    <td key={i}>{val.email}</td>
                                    <td key={i}>{val.phone}</td>
                                    <td key={i}>{val.dob}</td>
                                </tr>   
                                

                                ))
                            }
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        


        </>
    )
}

export default  BoardsManagement;