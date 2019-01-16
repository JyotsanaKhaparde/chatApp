/***********************************************************************************
 *  Purpose         : 
 *  @file           : user.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
const mongoose = require('mongoose');
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

function userModel() 
{

}

userModel.prototype.save = (data, callback) => 
{
    var newData = new user(data);
    newData.save((err, result) => 
    {
        if (err) 
        {
            callback(err);
        } 
        else 
        {
            callback(null, result);
        }
    })
}
userModel.prototype.findOne=(data,callback)=>
{
    user.find(data,(err,result)=>
    {
        console.log(data);
        if(err)
        {
            callback(err);
        }
        else
        {
            callback(null,result);
        }
    })   
}
module.exports = new userModel();