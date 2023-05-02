var express = require('express');
const router = express.Router();
var userController = require('../src/Controller/userController.js');
var ProductController = require('../src/Controller/productController.js');
 
router.route('/user/getAll').get(userController.getDataConntrollerfn);
 
router.route('/user/create').post(userController.createUserControllerFn);
 
router.route('/user/update/:id').patch(userController.updateUserController);
 
router.route('/user/delete/:id').delete(userController.deleteUserController);

router.route('/product/getAll').get(ProductController.getDataConntrollerfn);
 
router.route('/product/create').post(ProductController.createUserControllerFn);
 
router.route('/product/update/:id').patch(ProductController.updateUserController);
 
router.route('/product/delete/:id').delete(ProductController.deleteUserController);
 
module.exports = router;