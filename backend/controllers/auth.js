const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require("bcryptjs")
const cookie=require('cookie-parser')
require('../db');
const User=require('../models/schema');
const { resourceLimits } = require('worker_threads');
const { response } = require('express');
const { set } = require('mongoose');
//const { json } = require('stream/consumers');


const signup=async(data)=>{
    const {fname,lname,email,dob,phone,password,cpassword}=data;
    if(!fname || !lname || !email || !dob || !phone || !password || !cpassword)
    {
       const result={message:"Allfields are require",status:401}
       return result;
    }
    try{
       const userExist=await User.findOne({email:email})
        
            if(userExist){
            const result={message:"Email already exist",
        status:202};
        return result;
          }
       
            //const user=new User({fname,lname,email,dob,phone,password});
            if(password!==cpassword)
            {
                const result={message:"Password don't match",
            status:404};
            return result;
            }
            const hashedPassword= await bcrypt.hash(password,10);
            //console.log(hashedPassword)
           // const hashedCPassword=await bcrypt.hashSync(cpassword,10);


            const user=new User({fname,lname,email,dob,phone,password:hashedPassword});
    
           const userSignup=await user.save();
           if(userSignup){
                const result={message:"user registered successfully",
            status:200}
        return result;}
                else{
                    const result={message:"failed to registered",
                status:500}
                return result;
                }

            
    
        
    }

   
    catch(err){console.log(err.message)};
}

const signin=async(data,res,req)=>{
    //const result
    try{
        const {email,password}=data;
        if(!email || !password){
            const result={message:"Invalid data",
        status:401};
        return result;
        }
        const userLogin=await User.findOne({email:email})
        
        if(userLogin){
            
            const isMatch=await bcrypt.compare(password,userLogin.password);
            if(isMatch){
            const key='MYNAMEISABHINASHKUMARSINGHDHANBADJHARJHAND'
            //console.log(process.env.SECRET_KEY)
            let token=await jwt.sign({
                userLogin_id:userLogin._id
            },process.env.SECRET_KEY);
            //console.log(token);
            userLogin.tokens=userLogin.tokens.concat({token:token});
            await userLogin.save({token:token});
            //console.log("token")
            res.cookie('shivam',token)
            console.log('Cookies',req.cookies)
             
            

                const result={message:"Signin successfully",
            status:200};
            return result;
            }
            else{
                const result={message:"error",
            status:400};
            return result;
            }
        }
        else{
            const result={message:"error",
        status:404};
        return result;
        }
        
    }catch(err){
        console.log(err.message);
    }
    
}

//const BoardsManagement=()=>{
    const find1=async(res)=>{
            const result=await User.find({})
            return result;
    }
    const delete1=async(data,res)=>{
        console.log(data)
        const result=await User.deleteOne({"_id":Object(data)})
        return result;
}
const find2=async(data)=>{
    const result=await User.findOne({_id:data})
    return result;
}
const find3=async(data)=>{
    const result=await User.updateOne({_id:data._id},{$set: {email:data.email,fname:data.fname,lname:data.lname,phone:data.phone}})
    return result;
}



module.exports ={signup,signin,find1,delete1,find2,find3}