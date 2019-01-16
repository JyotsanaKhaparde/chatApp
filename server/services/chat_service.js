/***********************************************************************************
 *  Purpose         : 
 *  @file           : chat_service.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const chatModel = require('../app/models/chat');
exports.dashboard = (data, callback) => 
{
    chatModel.save(data, (err, result) => 
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