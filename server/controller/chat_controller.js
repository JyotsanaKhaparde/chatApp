/***********************************************************************************
 *  Purpose         : chat_contriller is for checking that request body of 
 *                    dashboard have error or not and according to it 
 *                    it gives response result.
 *  @file           : chat_controller.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const chatService = require('../services/chat_service');
const { check, resultValidation } = require('express-validator/check')

exports.dashboard = (req, res) => 
{
    var responseResult = {};
    check('senderName', 'sender name can not be empty').isEmpty();
    check('senderName', 'sender name should contain only alphabets').isAlpha();
    check('reciverName', 'reciver name can not be empty').isEmpty();
    check('reciverName', 'reciver name should contain only alphabets').isAlpha();
    // Find the validation errors in this request
    const errors = resultValidation(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({
            status: false,
            message: err,
        });
    }
    chatService.dashboard(req.body, (err, result) => 
    {
        if (err) 
        {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        } 
        else 
        {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}