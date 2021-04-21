const {UserModel}=require('./model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.create=async(data)=>{
    bcrypt.hash(data.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        const user={
            name:data.name,
            password:hash,
            email:data.email
        }
        UserModel.create(user,(err,response)=>{
            return response;
        });
        
    });
    // UserModel.create(data,(err,response)=>{
    //             return response;
    //         });
    // ({email:data.email},data,{upsert:true});
}

module.exports.getAll=async()=>{
    const response= await UserModel.find();
    return response;
}
