var userModel = require('../Model/userModel');
module.exports.getDataFromDBService = () => {
    return  userModel.find({}).then().catch();
}
module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        userModelData.password = userDetails.password;
            userModelData.save().then(()=>   resolve(true)).catch((error)=> reject(false))      
    });
}
module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails).then(()=>   resolve(true)).catch((error)=> reject(false))
      
    });
}
module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id).then(()=>   resolve(true)).catch((error)=> reject(false))      
    });
}