import React, { Component } from "react";

class DisplayMessages extends Component {
    render() {
        console.log();
        
        return (
            this.props.chatArray.map((key) =>
                <div>
                    {key.senderName === localStorage.getItem('sender') ?
                        (
                            key.reciverName === this.props.receiverName ?
                                (
                                    <div className="sender-div">
                                        <label >{key.senderName}:</label>
                                        <div >{key.message}</div>
                                    </div>
                                ) : (
                                    null
                                )

                        ) : (
                            null
                        )}

                    {
                        key.senderName === this.props.receiverName ? (
                            <div className="receiver-div">
                                <label >{key.senderName}:</label>
                                <div >{key.message}</div>
                            </div>
                        ) : (
                                null
                            )
                    }
                </div>
            )
        )

    }
}
export default DisplayMessages;