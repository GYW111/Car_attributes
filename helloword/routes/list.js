const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// 获取汽车列表
router.get('/user', userController.getCarList);
router.get('/del', userController.deleCar);
router.post('/add', userController.addCar);

module.exports = router;