import React, { Component } from "react";
import LoginInput from "../components/logininput";
class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1><center>Log in</center></h1>
                </div>
                <div>
                    <LoginInput />
                </div>
            </div>
        )
    }
}
export default Login; 