/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : registration.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import RegistrationInput from "../components/registrationinput";
class Registraion extends Component {
    render() {
        return (
            <div>
                <div class="regtext">
                    <h1>Registration</h1>
                </div>
                <div>
                    <RegistrationInput />
                </div>
            </div>
        )
    }
}
export default Registraion;

