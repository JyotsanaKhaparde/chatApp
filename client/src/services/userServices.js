/***********************************************************************************
 *  Purpose         : 
 *  @file           : usreService.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import axios from 'axios';
function userRegister(firstname, lastname, email, password) 
{
    axios.post('/registration', 
    {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
    })
        .then(function (response) 
        {
            console.log(response);
            alert('Registered Successfully!!');
            window.location.href = '/login'
        })
        .catch(function (err) 
        {
            console.log(err);
            alert('User with this Username already exists!!');
        });
}
function userLogin(username, password) 
{
    axios.post('/login', 
    {
        email: username,
        password: password
    })
        .then(function (response) 
        {
            console.log(response);
            alert('Login Successfully!!');
            window.location.href = '/dashboard'
        })
        .catch(function (err) 
        {
            console.log(err);
            alert('Login Unsuccessful..!!!!!');
        });
}
export {
    userRegister,
    userLogin
}