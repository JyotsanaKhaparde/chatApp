/***********************************************************************************
 *  Purpose         : This is a entery point for backend here configuring the database and
 *                    connecting to the database.
 *  @file           : server.js
 *  @author         : Jyotsana Khaparde 
 *  @version        : 1.0
 *  @since          : 16/01/2019
**********************************************************************************/

const express = require('express')
const app = express()
const chatController = require('./controller/chat_controller');
// To give path to each file
const router = require('./routes/routes');
var bodyParser = require('body-parser')     //Parse the JSON request body 
//To get the path of database
const dbConfig = require('./config/database_config.js');
const mongoose = require('mongoose');
//port number on which server is running
const port = 3001;
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
connections = [];
console.log('Server running..');
io.sockets.on('connection', function (socket) {
    connections.push(socket)
    console.log('Connected :  %s socket connected', connections.length);
    socket.on('new_msg', function (req) {
        console.log("client sent msg :", req);
        chatController.peerChatMsgSaveController(req, (err, data) => {
            if(err)
            {
                console.log('err on server.js when receiving data on msg save via controller', err);
            }
            else
            {
                console.log('msg save result on server.js', data);
                socket.emit('emitMsg', data);
            }
        })
    })
})
// io.sockets.on('connection', function (socket) {
//     socket.emit('send_msg', "hello client");
//     socket.on('new_msg', (data) => {
//         console.log('from client msg is-----', data);
//     });
// })
//Disconnect
io.sockets.on('disconnect', function (data) {
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected : %s socket connected', connections.length);
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router);
// Configuring the database
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    // Promise is fullfilled
    console.log("Successfully connected to the database");
}).catch(err => {
    // Promise is rejected
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => res.send('Hello World!'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`));



