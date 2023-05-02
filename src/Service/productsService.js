var productModel = require('../Model/productModel');

module.exports.
getDataFromDBService = () => {
    return  productModel.find({}).then().catch();
}
module.exports.createproductDBService = (productDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var productModelData = new productModel();
        productModelData.name = productDetails.name;
        productModelData.type = productDetails.type;
        productModelData.price = productDetails.price;
        productModelData.image = productDetails.image;
     

            productModelData.save().then(()=>resolve(true)).catch((error)=> reject(false))
       
    });
}
module.exports.updateproductDBService = (id, productDetails) => {
    console.log(productDetails);
    return new Promise(function myFn(resolve, reject) {
        productModel.findByIdAndUpdate(id, productDetails).then(()=>   resolve(true)).catch((error)=> reject(false))
    });
}
module.exports.removeproductDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        productModel.findByIdAndDelete(id).then(()=>   resolve(true)).catch((error)=> reject(false))
    });
}