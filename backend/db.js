
const mongoose=require('mongoose');
const db='mongodb+srv://abhi:fXY9s8VfJj8DkjNH@cluster0.lme2e.mongodb.net/userdata?retryWrites=true&w=majority';
mongoose.connect(db,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log('connection successfull')
}).catch((err)=>console.log(err.message));