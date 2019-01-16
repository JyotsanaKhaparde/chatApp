const chatModel = require('../app/models/chat');

exports.dashboard = (data, callback) => {
    chatModel.save(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}