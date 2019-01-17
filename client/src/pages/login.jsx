/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : login.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import LoginInput from "../components/logininput";
class Login extends Component 
{
    render() 
    {
        return (
            <div>
                 <div className = "App_aside"></div>
                <div className = "App_form"></div>
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