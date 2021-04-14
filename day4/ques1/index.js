const express = require('express');
const jwt = require('jsonwebtoken');

const app=express();

app.use(express.json());

//generate token
app.get('/generatetoken',(req,res)=>{
    var token=jwt.sign({id:"tarun"},"hello",{expiresIn:60});
    res.send(token);
})

//valdiate middleware
function validate(req,res,next){
    var token=req.headers['my-token'];
    // console.log(req.headers);
    jwt.verify(token,"hello",function(err,decoded){
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        next();
    })
    
}
//requestss after validating 
app.use(validate);
app.get('/getme',(req,res)=>{
    res.send(200);
})

app.listen(4000,()=>{
    console.log('http://127.0.0.1:4000');
})