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
import { getUser, displayChat, userCatArray } from "../services/chatservice";
import DisplayMessages from "./displayMessage";
// const socket = io.connect('http://localhost:3001');
// socket.emit('new_msg', "hello");
// socket.on('send_msg', (data) => {
//     console.log(data);
// })
class DashboardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            usersData: [],
            displayMessage: "",
            arrayOfMessage: [],
            sender:'',
            receiver:''
        }
    }
    //it call after the method render
    componentDidMount() {
        getUser()
            .then((result) => {
                this.setState({
                    usersData: result.data.result
                })
                // console.log("user", result.data.result);
            })
            .catch((error) => {
                alert(error);
            });

        userCatArray()
            .then((result) => {
                this.setState({
                    arrayOfMessage: result.data.result
                })
                // console.log("msg array ----", this.state.arrayOfMessage);
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
        let sender = localStorage.getItem('sender')
        this.setState({sender:sender})
        console.log('Sender is:---',sender);
        console.log(' receiver is : ', this.state.receiver);
        displayChat(sender , this.state.receiver,this.state.message);

        this.setState({
            message: '',
            anchorEl: null
        })
        this.setState({ displayMessage: this.state.message })
        this.state.arrayOfMessage.push(this.state.message);
        console.log('message array: ', this.state.arrayOfMessage);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (key, event) => {
        this.setState({ anchorEl: null });
        let receiver = event.target.textContent;
        this.setState({receiver:receiver})   
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex", flexDirection: "row", height: "515px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <h3>Online User</h3>
                            {this.state.usersData.map((key) =>
                                key.email !== localStorage.getItem('sender') ?
                                    <MenuItem onClick={(event) => this.handleClick(key,event)}>{key.email}</MenuItem>
                                    : null
                            )}
                        </div>
                    </div>
                    <div style={{
                        marginLeft: "60px",
                        borderRadius: "10px",
                        padding: "10px",
                        backgroundColor: "navajowhite",
                        color: "black",
                        border: "4px solid black",
                        width:"500px"
                    }}>
                        <DisplayMessages chatArray={this.state.arrayOfMessage}
                        receiverName={this.state.receiver}/>

                    </div>
                    {/* <input disabled="true" style={{
                        marginLeft: "60px",
                        borderRadius: "10px",
                        padding: "10px",
                        backgroundColor: "navajowhite",
                        color: "black"
                    }}
                        value={this.state.message} /> */}

                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        placeholder="typing"
                        style={{ marginLeft: "294px", width: "1095px" }}
                        value={this.state.message}
                        onChange={this.handleMessage}
                    />
                    <Button id="chatSendButton" onClick={this.handleSubmit}>Send</Button>
                </div>
            </div>
        )
    }
}
export default DashboardInput;