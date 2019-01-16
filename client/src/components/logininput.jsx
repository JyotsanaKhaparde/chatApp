import React, { Component } from "react";
class LoginInput extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
            {
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
        else if (this.state.password == "") 
        {
            alert('password cannot be empty');
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) 
        {
            alert('Invalid username');
        }
        else if (this.state.password.length < 8) 
        {
            alert('Password must be of atleast 8 characters long')
        }
        else 
        {
            const
                {
                    username, password
                } = this.state;
            console.log(`User name was submitted: ${username}. Password was submitted: ${password}`);
            window.location.href = "dashboard"
        }
    }
    registrationclick = (e) => 
    {
        e.preventDefault();
        window.location.href = "registraion"
    }
    render() 
    {
        return (
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