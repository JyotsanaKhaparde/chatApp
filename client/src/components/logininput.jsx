/***********************************************************************************
 *  Purpose         : 
 *  @file           : logininput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { ImageBackground } from 'react-native';
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
    handleusernameChange = (event) => 
    {
        const username = event.target.value
        this.setState({ username: username })
    }
    handlepasswordChange = (event) => 
    {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleSubmit = (event) => 
    {
        event.preventDefault();
        if (this.state.username == "") 
        {
            alert('username cannot be empty');
        }
        else
        if (this.state.password == "") 
        {
            alert('password cannot be empty');
        }
        else
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) 
        {
            alert('Invalid username');
        }
        else 
        if (this.state.password.length < 8) 
        {
            alert('Password must be of atleast 8 characters long')
        }
        else 
        {
            userLogin(this.state.username,this.state.password);
        }
    }
    registrationclick = (e) => 
    {
        e.preventDefault();
        window.location.href = "registraion"
    }
    render() {
        return (
            <ImageBackground source={require('../assets/images/bg.jpg')} class = 'imageContainer'>
            </ImageBackground>
            <div>
                <div className="container">
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
export { LoginInput };
export default LoginInput;