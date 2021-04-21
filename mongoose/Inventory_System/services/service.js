const {ItemModel}=require('../models/ItemModel');


module.exports.getAll=async ()=>{
    const items=await ItemModel.find();
    // console.log(items);
    return items;
}

module.exports.addItem=async (data)=>{
    console.log(data);
    try{
    const itms=await ItemModel.findOneAndUpdate({name:data.name},data,{upsert:true});
    return itms;
    }
    catch(e){
        return e;
    }
}

module.exports.update=async (id,data)=>{

    // const res=await ItemModel.find({_id:id.id});
    const res=await ItemModel.updateOne({_id:id.id},data)
    return res;
}


module.exports.delete=async (id)=>{
    const res=await ItemModel.deleteOne({_id:id.id});
    return res;
}



//exporting a variale as module.exports=abc is differnt from module.exports={abc};

