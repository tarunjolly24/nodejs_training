const express=require('express');
const mongoose=require('./connections');
const app=express();
const session=require('express-session')

const userRoute=require('./routes/userRoutes');
const {passport}=require('./passportSetup/passport')
app.use(express.json());
app.use(express.urlencoded(({ extended: true })))
app.use(session({ secret: 'anything' }));

// app.use(session({
//     secret:'abcd efgh ijkl',
//     resave:false,
//     saveUninitialized:true,
//     cookie:{
//         maxAge:1000*60*60*60,
//     }    
// }))
// app.use(express.static(__dirname+'/public'))
app.use('/',express.static(__dirname+'/public'))


app.use(passport.initialize())
app.use(passport.session())
app.set('view engine','hbs');
app.use('/users',userRoute);
function isUserLoggedIn(req,res,next){
    console.log(req.user);

    if(req.user)next();
    else res.redirect('/login');
    // next();
}

app.get('/',isUserLoggedIn,(req,res)=>{
    res.render('index');
})
app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/login',(req,res)=>{
    res.render('login');
})



app.listen(4000,()=>{
    console.log('http://127.0.0.1:4000');
})
