
const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")
// const db='mongodb+srv://abhi:fXY9s8VfJj8DkjNH@cluster0.lme2e.mongodb.net/userdata?retryWrites=true&w=majority';
// mongoose.connect(db,{
//     useNewUrlParser:true,
    
//     useUnifiedTopology:true,
    
// }).then(()=>{
//     console.log('connection successfull')
// }).catch((err)=>console.log(err.message));

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    tokens:[
       { token:{
            type:String,
            required:true
       }
        }
]

})



// userSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//         console.log('hy abhi')
//         this.password=bcrypt.hash(this.password,10);
//         this.cpassword=bcrypt.hash(this.cpassword,10);
//     }
//     next();
// })

const User=mongoose.model('USER',userSchema);

module.exports=User;