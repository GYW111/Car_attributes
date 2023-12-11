const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// 获取汽车列表
router.get('/car', userController.getCarList);
router.get('/del', userController.deleCar);
router.post('/add', userController.addCar);
router.get('/details', userController.detailsCar);

module.exports = router;