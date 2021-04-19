const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/inventory",{
    useNewUrlParser:true,

});

mongoose.connection.on('error',(err)=>{
    console.log('error');
})

mongoose.connection.on('connected',(err,res)=>{
    console.log('connected')    ;
})

module.exports={mongoose};
