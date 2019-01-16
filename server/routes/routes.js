/***********************************************************************************
 *  Purpose         : 
 *  @file           : router.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');
const chatController = require('../controller/chat_controller');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/dashboard', chatController.dashboard);

module.exports = router;