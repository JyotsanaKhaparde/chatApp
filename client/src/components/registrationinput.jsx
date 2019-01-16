import React, { Component } from "react";
class RegistrationInput extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
            {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmpassword: ''
            }
        this.baseState = this.state
    }
    handleuserfirstnameChange = (event) => 
    {
        const firstname = event.target.value
        this.setState({ firstname: firstname })
    }
    handleuserlastnameChange = (event) => 
    {
        const lastname = event.target.value
        this.setState({ lastname: lastname })
    }
    handleuseremailChange = (event) => 
    {
        const email = event.target.value
        this.setState({ email: email })
    }
    handlepasswordChange = (event) => 
    {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleconfirmpasswordChange = (event) => 
    {
        const confirmpassword = event.target.value
        this.setState({ confirmpassword: confirmpassword })
    }
    handleSubmit = (event) => 
    {
        if(this.state.firstname == "")
        {
            alert('firstname cannot be empty');
        }
        else if(this.state.lastname == "")
        {
            alert('lastname cannot be empty');
        }
        else if(this.state.email == "")
        {
            alert('email cannot be empty');
        }
        else if(this.state.password == "")
        {
            alert('password cannot be empty');
        }
        else if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email))
        {
            alert('Invalid email');
        }
        else if(this.state.password.length < 8)
        {
            alert('Password must be of atleast 8 characters long')
        }
        else if(this.state.confirmpassword == "")
        {
            alert('Confirm password cannot be empty');
        }
        else if(this.state.password !== this.state.confirmpassword)
        {
            alert('Password and confirm password must be same');
        }
        else
        {
            event.preventDefault()
            const
                {
                    firstname, lastname, email, password, confirmpassword
                } = this.state;
            console.log(`User first name was submitted: ${firstname}. User last name was submitted: ${lastname}.user email was submitted: ${email}.user password was submitted: ${password}.usre confirm password was submitted: ${confirmpassword}`);
            window.location.href = "login"
        }
    }
    resetForm = () => 
    {
        this.setState(this.baseState)
    }
    render()
    {
        return (
            <div>
                <form>
                    <div className="container">
                        <center>
                            <table>
                                <tr><td>First Name</td>
                                    <td><input type="text" placeholder="Enter First Name" value={this.state.firstname} onChange={this.handleuserfirstnameChange} /></td>
                                </tr>
                                <tr><td>Last Name</td>
                                    <td><input type="text" placeholder="Enter Last Name" value={this.state.lastname} onChange={this.handleuserlastnameChange} /></td>
                                </tr>
                                <tr><td>Email Address</td>
                                    <td><input type="text" placeholder="Enter Email" value={this.state.email} onChange={this.handleuseremailChange} /></td>
                                </tr>
                                <tr><td>Password</td>
                                    <td><input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlepasswordChange} /></td>
                                </tr>
                                <tr><td>Confirm Password</td>
                                    <td><input type="password" placeholder="Enter Confirm Password" value={this.state.confirmpassword} onChange={this.handleconfirmpasswordChange} /></td>
                                </tr>
                            </table>
                        </center>
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
            </div>
        )
    }
}
export default RegistrationInput;