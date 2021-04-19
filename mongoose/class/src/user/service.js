
const {UserModel,storyModel}=require('./model');

module.exports.create=async({firstName,lastName,title,age})=>{
    const user=await UserModel.create({
        first_Name:firstName,
        last_Name:lastName,
        age
    });
    const story=await storyModel.create({
        author:user._id,
        title,
    })

    return {user,story};

}
