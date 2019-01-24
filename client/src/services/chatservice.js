import axios from 'axios';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3002");
export function getUser(data)
{   
    return axios('/getAllUserName',{
        method:"GET",
        data:data
    })
}

export function displayChat(req){
    socket.emit("new_msg",req);
    socket.on("emit_msg", ()=> {
        console.log("got data from server on service ",req);
    })
}