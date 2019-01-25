import axios from 'axios';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");
export function getUser(data) {
    return axios('/getAllUserName', {
        method: "GET",
        data: data
    })
}
export function displayChat(sender,receiver,message) {
    let request = {
        senderId:sender,
        receiverId:receiver,
        message:message    
    }
    socket.emit("new_msg", request);
    socket.on("emit_msg", (result) => {
        console.log("got data from server on service ", result);
    })
}

export function userCatArray(data){
    return axios('/getAllChats' ,{
        method: "GET",
        data: data
    })
}