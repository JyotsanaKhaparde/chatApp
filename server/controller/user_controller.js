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
exports.registration = (req, res) => 
{
    var responseResult = {};
    userService.registration(req.body, (err, result) => 
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
exports.login = (req, res) => 
{
    var responseResult = {};
    userService.login(req.body, (err, result) => 
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