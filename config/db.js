const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/user', {
    
useNewUrlParser: true,

useUnifiedTopology: true })
.then(()=>{console.log('Connected to db');})
.catch(()=>console.log('connection failed'));

module.exports=mongoose