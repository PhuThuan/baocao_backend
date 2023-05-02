var userService = require('../Service/productsService');
var getDataConntrollerfn = async (req, res) =>
{
    var users = await userService.getDataFromDBService();
    console.log(users);
    res.send({ "status": true, "data": users });
}
var createUserControllerFn = async (req, res) =>
{
    var status = await userService.createproductDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
var updateUserController = async (req, res) =>
{
    console.log(req.params.id);
    console.log(req.body);
    
    var result = await userService.updateproductDBService(req.params.id,req.body);
 
     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
}
var deleteUserController = async (req, res) =>
{
     console.log(req.params.id);
     var result = await userService.removeproductDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };