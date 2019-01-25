/***********************************************************************************
 *  Purpose         : given routes using router.
 *  @file           : router.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const express = require('express');
const router = express.Router();
//Setting controller path into controller variables
const userController = require('../controller/user_controller');
const chatController = require('../controller/chat_controller');
// Using router.post() sending data to database
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/dashboard', chatController.peerChatMsgSaveController);
router.get('/getAllUserName', userController.getAllUser);
router.get('/getAllChats', chatController.getAllUserChats);
module.exports = router;