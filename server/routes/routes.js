const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');
const chatController = require('../controller/chat_controller');
//const messageController = require('../controller/message_controller');


router.post('/registration', userController.registration);
router.post('/dashboard', chatController.dashboard);
router.post('/login', userController.login);


module.exports = router;