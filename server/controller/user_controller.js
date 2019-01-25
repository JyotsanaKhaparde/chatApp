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
const { check, validationResult } = require('express-validator/check');
exports.registration = (req, res) => {
    var responseResult = {};
    check('firstName', 'firstname cannot be empty').isEmpty();
    check('firstName', 'firstname must contain only alphabets').isAlpha();
    check('lastName', 'lastname cannot be empty').isEmpty();
    check('lastName', 'lastname must contain only alphabets').isAlpha();
    check('email', 'username cannot be empty').isEmpty();
    check('email', 'username must be an email').isEmail();
    check('password', 'password cannot be empty').isEmpty();
    check('password', 'password must be atleast 8 characters long').isLength({ min: 8 });

    // Finds the validation errors in this request and wraps them in an object with handy functions
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
    console.log('48 ---in user ctrl');
    
    check('email', 'username cannot be empty').isEmpty();
    check('email', 'username must be an email').isEmail();
    check('password', 'password cannot be empty').isEmpty();
    check('password', 'password must be atleast 8 characters long').isLength({ min: 8 });

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({
            status: false,
            message: err,
        });
    }
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

exports.getAllUser = (req,res) => {
    var responseResult = {};
    userService.getAllUser((err, result) => {
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
