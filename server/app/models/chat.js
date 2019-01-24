/***********************************************************************************
 *  Purpose         : It is use for making schema for chat.
 *  @file           : chat.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
//require mongoose
const mongoose = require('mongoose');
//create instance of schema
var mongoSchema = mongoose.Schema;
var ChatSchema = new mongoSchema({
    'senderId:':
    {
        type: mongoSchema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    'receiverId':
    {
        type: mongoSchema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    'message':
    {
        type: mongoSchema.Types.ObjectId,
        ref: 'user',
        required: true
    },
});
function chatModel() {

}
chatModel.prototype.save = (data, callback) => {
    const newMsg = new data({
        'senderId': data.senderId,
        'receiverId': data.receiverId,
        'message': data.message
    });
    newMsg.save((err, result) => {
        if (err) {
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    });
}
module.exports = new chatModel();