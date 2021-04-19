const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.json());
mongoose.connect("mongodb://localhost:27017/mongo-session",{
    useNewUrlParser:"true",
});
mongoose.connection.on('error',err=>{
console.log("err");
    
})


mongoose.connection.on('connected',(err,res)=>{
console.log("connected");
});



app.listen(5000,()=>{
    console.log('http://localhost:5000');
})