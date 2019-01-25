/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : registrationinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userRegister } from "../services/userServices";
class RegistrationInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: '',
            toast: false,
        }
        this.baseState = this.state
    }
    handleuserfirstnameChange = (event) => {
        const firstname = event.target.value
        this.setState({ firstname: firstname })
    }
    handleuserlastnameChange = (event) => {
        const lastname = event.target.value
        this.setState({ lastname: lastname })
    }
    handleuseremailChange = (event) => {
        const email = event.target.value
        this.setState({ email: email })
    }
    handlepasswordChange = (event) => {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleconfirmpasswordChange = (event) => {
        const confirmpassword = event.target.value
        this.setState({ confirmpassword: confirmpassword })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.firstname ==="") {
            toast("firstname cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else
            if (this.state.lastname === "") {
                toast("lastname cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
            }
            else
                if (this.state.email === "") {
                    toast("email cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
                }
                else
                    if (this.state.password === "") {
                        toast("password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
                    }
                    else
                        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
                            toast("Invalid email", { position: toast.POSITION.BOTTOM_CENTER });
                        }
                        else
                            if (this.state.password.length < 8) {
                                toast("password must be of atleast 8 character long", { position: toast.POSITION.BOTTOM_CENTER });
                            }
                            else
                                if (this.state.confirmpassword === "") {
                                    toast("Confirm password con not be empty", { position: toast.POSITION.BOTTOM_CENTER });
                                }
                                else
                                    if (this.state.password !== this.state.confirmpassword) {
                                        toast("Password and confirm password must be same", { position: toast.POSITION.BOTTOM_CENTER });
                                    }
                                    else {
                                        event.preventDefault()
                                        userRegister(this.state.firstname, this.state.lastname, this.state.email, this.state.password);
                                    }
    }
    resetForm = () => {
        this.setState(this.baseState)
    }
    render() {
        return (
            <div>
                <form>
                    <div className="App_form">
                        <div className="insideDiv">
                            <table>
                                <tr><td>First Name</td>
                                    <td><input type="text" placeholder="Enter First Name" name="firstname" value={this.state.firstname} onChange={this.handleuserfirstnameChange} /></td>
                                </tr>
                                <tr><td>Last Name</td>
                                    <td><input type="text" placeholder="Enter Last Name" name="lastname" value={this.state.lastname} onChange={this.handleuserlastnameChange} /></td>
                                </tr>
                                <tr><td>Email Address</td>
                                    <td><input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleuseremailChange} /></td>
                                </tr>
                                <tr><td>Password</td>
                                    <td><input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handlepasswordChange} /></td>
                                </tr>
                                <tr><td>Confirm Password</td>
                                    <td><input type="password" placeholder="Enter Confirm Password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleconfirmpasswordChange} /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div id="important">
                        <center>
                            <table>
                                <tr>
                                    <td><button type="submit" className="button" onClick={this.handleSubmit}>REGISTER</button></td>
                                    <td><button type="submit" className="button" onClick={this.resetForm}>RESET</button></td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </form>
                <ToastContainer />
            </div>
        )
    }
}
export default RegistrationInput;