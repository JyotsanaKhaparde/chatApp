/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : logininput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../services/userServices";
import { withRouter } from "react-router-dom";
class LoginInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            toast: false,
        }
    }
    handlepasswordChange = (event) => {
        const password = event.target.value
        this.setState({ password: password })//updating value of password
    }
    handleusernameChange = (event) => {
        const username = event.target.value
        this.setState({ username: username })//updating value of username
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === "") //validation for username
        {
            toast("username cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else
            if (this.state.password === "") //validation for password
            {
                toast("password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
            }
            else
                if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
                    toast("Invalid username", { position: toast.POSITION.BOTTOM_CENTER });
                }
                else
                    if (this.state.password.length < 8) //validation for password length
                    {
                        toast("Password must be of atleast 8 characters long", { position: toast.POSITION.BOTTOM_CENTER });
                    }
                    else {
                        userLogin(this.state.username, this.state.password); //function of services which pass username ans password
                        this.setState({ username: '' })
                        this.setState({ password: '' })
                    }
    }
    registrationclick = (e) => {
        e.preventDefault(); //for preventing reload the page
        this.props.history.push('/registraion');
    }
    render() {
        return (
            <div>
                <div className="App_form">
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
                <ToastContainer />
            </div>
        )
    }
}
export default withRouter(LoginInput);