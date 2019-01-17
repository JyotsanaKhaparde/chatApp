/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core'
class DashboardInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            message: ""
        }
    }
    handleMessage = (e) => 
    {
        this.setState({ message: e.target.value });
    }
    render() 
    {
        return (
            <div>
                <textarea
                    id="chatTextField"
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        placeholder="typing......"
                        style={{ marginLeft: "162px", width: "800px" }}
                        value={this.state.message}
                        onChange={this.handleMessage}
                    />
                    <Button id="chatSendButton">Send</Button>
                </div>
            </div>
        )
    }
}
export default DashboardInput;