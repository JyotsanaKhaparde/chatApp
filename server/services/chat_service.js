/***********************************************************************************
 *  Purpose         : It's for taking data and callback function according to error 
 *                    or result.
 *  @file           : chat_service.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const chatModel = require('../app/models/chat');
exports.peerChatMsgSaveService = (req, callback) => {
    chatModel.peerChatMsgSaveModel(req, (err, result) => {
                  
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}

exports.getAllUserChats = (req,callback) => 
{
    chatModel.getAllUserChats(req,(err, result) => 
    {     
        if (err) {     
            callback(err);
        } else {
            callback(null, result);
        }
    })
}