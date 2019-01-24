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
    userModel.save(data, (err, result) => 
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
    userModel.findOne(data, (err, result) => 
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

exports.getAllUserName = (req,callback) => 
{
    userModel.getAllUserName(req,(err, result) => 
    {     
        console.log("in service");
        
        if (err) {     
            callback(err);
        } else {
            callback(null, result);
        }
    })
}