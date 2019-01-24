/***********************************************************************************
 *  Purpose         : user_contriller is for checking that request body of 
 *                    registration and login have error or not and according to it 
 *                    it gives response result.
 *  @file           : user_controller.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const userService = require('../services/user_service');
const { check, validationResult } = require('express-validator/check')
exports.registration = (req, res) => {
    var responseResult = {};
    check('firstName', 'First name can not be empty').isEmpty();
    check('firstName', 'First name should contain only alphabets').isAlpha();
    check('lastName', 'Last name can not be empty').isEmpty();
    check('lastName', 'Last name should contain only alphabets').isAlpha();
    check('email', 'User name cannot be empty').isEmpty();
    check('email', 'User name must be an email').isEmail();
    check('password', 'Password cannot be empty').isEmpty();
    check('password', 'Password must be atleast 8 characters long').isLength({ min: 8 });
    // Find the validation errors in this request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({
            status: false,
            message: err,
        });
    }
    userService.registration(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}
exports.login = (req, res) => {
    var responseResult = {};
    userService.login(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}
exports.getAllUserName = (req, res) => {
    var responseResult = {};
    userService.getAllUserName((err, result) => {
        if (err) {
            console.log("in ctrl");
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}