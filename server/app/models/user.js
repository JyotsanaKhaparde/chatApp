/***********************************************************************************
 *  Purpose         : It is use for making schema for registration and login.
 *  @file           : user.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var saltRound = 10; //number of rounds to use when generating a salt.
const UserSchema = mongoose.Schema({
    firstName:
    {
        type: String
    },
    lastName:
    {
        type: String
    },
    email:
    {
        type: String
    },
    password:
    {
        type: String
    },
    createdOn:
    {
        type: Date,
        default: Date.now()
    },
    updatedOn:
    {
        type: Date,
        default: Date.now()
    }
});
var user = mongoose.model('User', UserSchema);
function userModel() {

}
//validation for registration
userModel.prototype.save = (data, callback) => {
    user.findOne({ "email": data.email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            if (result !== null) {
                callback("this email is alredy exist");
            }
            else {
                data.password = bcrypt.hashSync(data.password, saltRound);
                var newData = new user(data);
                newData.save((err, result) => {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null, result);
                    }
                })
            }
        }
    });
}
//validation for login
userModel.prototype.findOne = (data, callback) => {
    user.findOne({ "email": data.email }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            if (bcrypt.compareSync(data.password, result.password)) {
                callback(null, result);
            }
            else {
                callback("incorrect password");
            }
        }
    });
}
//for getting all user
userModel.prototype.getAllUserName = (callback) => {
    console.log("in model");
    user.find({}, (err, result) => {
        console.log("Display all user");
        if (err) {
            callback(err);
        }
        else {
            console.log("result", result);

            callback(null, result);
        }
    });
}
module.exports = new userModel();
