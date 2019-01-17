/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : logininput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
//import { ImageBackground } from 'react-native';
import { userLogin } from "../services/userServices";
class LoginInput extends Component 
{
    constructor(props) 
    {
        super(props)
        this.state ={
                username: '',
                password: '',
            }
    }
    handlepasswordChange = (event) => 
    {
        const password = event.target.value
        this.setState({ password: password })//updating value of password
    }
    handleusernameChange = (event) => 
    {
        const username = event.target.value
        this.setState({ username: username })//updating value of username
    }
    handleSubmit = (event) => 
    {
        event.preventDefault();
        if (this.state.username == "") //validation for username
        {
            alert('username cannot be empty');
        }
        else
        if (this.state.password == "") //validation for password
        {
            alert('password cannot be empty');
        }
        else
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) 
        {
            alert('Invalid username');
        }
        else 
        if (this.state.password.length < 8) //validation for password length
        {
            alert('Password must be of atleast 8 characters long')
        }
        else 
        {
            userLogin(this.state.username,this.state.password); //function of services which pass username ans password
        }
    }
    registrationclick = (e) => 
    {
        e.preventDefault(); //for preventing reload the page
        window.location.href = "registraion"
    }
    render() 
    {
        return (
            <div>
                <div className="container" className="App_form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="insideDiv">
                            <label><b>Username</b></label>
                            <input type="text" placeholder="useremail" name="username" value={this.state.username} onChange={this.handleusernameChange} />
                            <label><b>Password</b></label>
                            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handlepasswordChange} />
                        </div>
                        <div className="btnDiv">
                            <button type="submit" id="button"><b>SIGN IN</b></button>
                            <button type="submit" id="button" onClick={this.registrationclick}><b>REGISTRATION</b></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default LoginInput;