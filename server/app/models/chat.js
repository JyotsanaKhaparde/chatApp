/***********************************************************************************
 *  Purpose         : It is use for making schema for chat.
 *  @file           : chat.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const mongoose = require('mongoose');
//Creating chat schema using moongose
const ChatSchema = mongoose.Schema({
    senderName: {
        type: String
    },
    reciverName: {
        type: String
    },
    message: {
        type: String
    },
});
var chat = mongoose.model('Chat', ChatSchema);
function chatModel() {

}
chatModel.prototype.peerChatMsgSaveModel = (req, callback) => {
    console.log('req on model to save msg--26--', req);
    
    var newData = new chat(req);
    newData.save((err, result) => {
                    
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

chatModel.prototype.getAllUserChats = (callback) => {
    chat.find({}, (err, result) => {
        if (err) 
        {
            callback(err);
        }
        else 
        {       
            callback(null, result);
        }
    });
}

module.exports = new chatModel();