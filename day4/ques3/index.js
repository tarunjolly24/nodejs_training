
const express=require('express');
const app=express();
const axios=require('axios');

function getInfo(url,req,res){
    axios.get(url)
  .then((reso)=>{
    // console.log(reso)
    res.send(JSON.stringify(reso.data))
  })
}

async function getInfoAwait(url,req,res){

    let response=await axios.get(url);
    console.log(response.data);
    res.send(response.data);
}

//'https://api.github.com/users/tarunjolly24'
app.get('/promise',(req,res)=>{
  getInfo('https://api.github.com/users/tarunjolly24',req,res);
})

app.get('/await',(req,res)=>{
    getInfoAwait('https://api.github.com/users/tarunjolly24',req,res);
  })

app.listen(4000,()=>{
  console.log('http://127.0.0.1:4000');
});