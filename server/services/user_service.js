/***********************************************************************************
 *  Purpose         : It's for taking data and callback function of registration and 
 *                    login according to error or result.
 *  @file           : user_service.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const userModel = require('../app/models/user');
exports.registration = (data, callback) => 
{
    userModel.registration(data, (err, result) => 
    {
        if (err) 
        {
            callback(err)
        } 
        else 
        {
            callback(null, result);
        }
    })
}
exports.login = (data, callback) => 
{
    console.log('26 ---in user services');
    userModel.login(data, (err, result) => 
    {     
        if (err) {     
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.getAllUser = (req,callback) => 
{
    userModel.getAllUser(req,(err, result) => 
    {     
        if (err) {     
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.getAllUserChats = (req,callback) => 
{
    userModel.getAllUserChats(req,(err, result) => 
    {     
        if (err) {     
            callback(err);
        } else {
            callback(null, result);
        }
    })
}