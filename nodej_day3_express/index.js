const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser')

const port=4000;
const app=express();
let users = [{
    "username": "tarun",
    "password": "123456",
    "firstname": "tarun",
    "lastname": "jolly"

}, {
    "username": "riya",
    "password": "143456",
    "firstname": "riya",
    "lastname": "rana"
}, {
    "username": "akshay",
    "password": "123486",
    "firstname": "akshay",
    "lastname": "kumar"
}, {
    "username": "prabh",
    "password": "1234456",
    "firstname": "prabh",
    "lastname": "kaur"
}, {
    "username": "john",
    "password": "155456",
    "firstname": "john",
    "lastname": "cena"
}, {
    "username": "aroman",
    "password": "1234446",
    "firstname": "roman",
    "lastname": "reign"
}, {
    "username": "seth",
    "password": "233423",
    "firstname": "seth",
    "lastname": "rollins"
}, {
    "username": "dean",
    "password": "1223456",
    "firstname": "dean",
    "lastname": "ambrose"
}];

// app.use(bodyParser.json());
app.use(express.json())
// app.use(express.urlencoded(({ extended: true })))
app.use(cors());


app.get('/users',(req,res)=>{
    res.send(users);
})

//middleware 
const created_date=(req,res,next)=>{
    // console.log(req.body);
    req.created_on=new Date();
    next();
}

app.post('/adduser',created_date,(req,res)=>{
    console.log(req.body);
    console.log(req.created_on);

    users.push(req.body);
    res.send(users);
})

//delete requet
app.get('/:username',(req,res)=>{
    // console.log(req.params);

    // console.log(req  .params.username);
    users=users.filter((item)=>item.username!==req.params.username);
    // console.log(users);
    res.sendStatus(200);
})
app.listen(port,()=>{
    console.log('http://127.0.0.1:4000');
})
