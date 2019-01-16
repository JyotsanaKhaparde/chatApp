const mongoose = require('mongoose');

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

chatModel.prototype.save = (data, callback) => {
    var newData = new chat(data);
    newData.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

module.exports = new chatModel();