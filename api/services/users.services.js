const User=require('../data_layer/user.schema');


async function getAllUsers(){
    let result=await User.find();
    return result;
    
}

const createUser=async (user)=>{
    result = await User.create(user);
    return result;
}

module.exports={
   getAllUsers,
   createUser
}