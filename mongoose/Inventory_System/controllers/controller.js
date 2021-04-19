const item=require('../services/service');

module.exports.getAll=async (req,res)=>{
    const response=await item.getAll();
    res.send(response);
};

module.exports.addItem=async (req,res)=>{
    console.log(req.body);
    
    const response=await item.addItem(req.body);
    res.send(response);
    
}

module.exports.update=async (req,res)=>{
    // console.log(req.params);
    const resp=await item.update(req.params,req.body);
    res.send(resp);
}

module.exports.delete=async (req,res)=>{
    const resp=await item.delete(req.params);
    res.send(resp);
}