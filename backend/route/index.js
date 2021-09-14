const express=require('express');
const bcrypt=require("bcryptjs")

const router=express.Router();
const {signup,signin,find1,delete1,find2,find3} =require('../controllers/auth')
require('../db');
const User=require('../models/schema');
const authenticate = require('../middleware/authenticate');
const { find } = require('../models/schema');

router.get('/',(req,res)=>{
    res.send("hello");

});

router.post('/Signup',async(req,res)=>{
        console.log(req.body);
        const response=await signup(req.body);
        console.log(response);
       return  res.send(response)


    
        
});

router.post('/signin',async(req,res)=>{
       const response=await signin(req.body,res,req);
       
       return  res.send(response)

    
})
router.delete('/deleteuser',async(req,res)=>{
       const response=await delete1(req.body);
       console.log(response.deletedCount);
       return  res.send(response)

    
})

router.get("/BoardsManagement",authenticate,(req,res)=>{
       res.send(req.rootUser);
})

router.get("/BoardsManagement/data",async(req,res)=>{
       const response=await find1(res)
       //console.log(response[0]);
        res.send(response)
})

router.post("/find",async(req,res)=>{
       console.log(req.body)
       const response=await find2(req.body)
       console.log(response);
        res.send(response)
})

router.put("/findUpdate",async(req,res)=>{
       console.log(req.body)
       const response=await find3(req.body)
       console.log(response);
        res.send(response)
})
module.exports=router