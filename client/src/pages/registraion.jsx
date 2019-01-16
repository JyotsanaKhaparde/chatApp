import React, { Component } from "react";
import RegistrationInput from "../components/registrationinput";
class Registraion extends Component
{
    render()
    {
        return(
            <div>
                <div class = "container">
                    <h1><center>Registration</center></h1>
                </div>
                <div>
                    <RegistrationInput/>
                </div>
            </div>
        )
    }
}
export default Registraion;

