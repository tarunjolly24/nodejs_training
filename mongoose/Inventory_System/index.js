const express=require('express');
const app=express();
const mongoose=require('./Connections/connectMongoose');

const item=require('./routes/items');

app.use(express.json());
app.use('/items',item);


app.listen(5000,()=>{
    console.log('http://localhost:5000');
})