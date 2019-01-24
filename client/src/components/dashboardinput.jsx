/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { TextField, Button, MenuItem } from '@material-ui/core'
import io from 'socket.io-client';
import { getUser, displayChat } from "../services/chatservice";

//import './App.css';
const socket = io.connect('http://localhost:3002');
socket.emit('new_msg', "hello");
socket.on('send_msg', (data) => {
    console.log(data);
})

class DashboardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            usersData: [],
            displayMessage: "",
            arrayOfMessage: []
        }
    }

    componentDidMount() {
        getUser()
            .then((result) => {
                this.setState({
                    usersData: result.data.result
                })
                console.log("user", result.data.result);
            })
            .catch((error) => {
                alert(error);
            });
    }
    handleMessage = (e) => {
        this.setState({ message: e.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        displayChat(this.state.message);
        this.setState({
            message:''
        })
        this.setState({displayMessage})
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex", flexDirection: "row", height: "515px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <h3>Online User</h3>
                            {/* <textarea id="onlineUser" />   */}
                            {this.state.usersData.map((key) =>
                                <MenuItem>{key.email}</MenuItem>)}
                        </div>
                        
                    </div>
                    <textarea id="chatTextField" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        placeholder="typing"
                        style={{ marginLeft: "294px", width: "1095px" }}
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