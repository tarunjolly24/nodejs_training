const users=require('./services');

module.exports.create=async(req,res)=>{
    console.log(req.body);
    const response=await users.create(req.body);
    res.render('login');
}


module.exports.getAll=async(req,res)=>{
    const response=await users.getAll();
    res.send(response);
}