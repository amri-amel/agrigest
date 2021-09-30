const User=require('../data_layer/user.schema');


async function getAllUsers(){
    let result=await User.find();
    return result;
    
}

export default{
   getAllUsers:getAllUsers
}