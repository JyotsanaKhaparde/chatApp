import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import { Button } from '@material-ui/core';
const socket_io = io.connect('http://localhost:3001');

socket_io.emit('new_msg', "hello");
socket_io.on('send_msg', (data) => {
    console.log(data);
});

class SocketCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }
    render() {
        return (
            <div>
                <div style={{
                    marginTop: "60px",
                    marginLeft: "30px"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0px" }}>
                        <div style={{ border: "1px solid #ccc", width: "20%" }}>
                            <label> <b>Online Users </b> </label>
                        </div>
                        <textarea id="chatTextField" value={this.state.message} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0px" }}>
                        <input type="text" placeholder="Enter your message here" value={this.state.message}
                            style={{
                                width: "50%",
                                padding: "12px 20px",
                                margin: "8px 0",
                                display: "inline-block",
                                border: "1px solid #ccc",
                                marginLeft: "320px"
                            }} />
                        <Button style={{
                            width: "111px",
                            height: "43px",
                            marginTop: "8px",
                            marginRight: "193px",
                            marginLeft: "0px",
                            fontSize: "18px",
                            fontFamily: "bold",
                            color: "#f1f1f1",
                            borderRadius: "4px",
                            backgroundColor: " #4CAF50",
                        }}>Send</Button>
                    </div>
                </div>
            </div >
        )
    }
}

export default SocketCheck;