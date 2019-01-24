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
const server = require('http').createServer(app)
//create a new socket.io instance attached to the http server.
const io = require('socket.io').listen(server)
const dbConfig = require('./config/database_config.js');
const mongoose = require('mongoose');
const router = require('./routes/routes');
var bodyParser = require('body-parser')
connections = [];
// extended: true -> then you can parse nested objects
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//it will match any path that begins with '/'
app.use('/', router);
// Configuring the database(legacy code)
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url,
{
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
//server.listen method create a listener on a specified code
server.listen(process.env.PORT || 3002)
console.log('Server running..');
//it match only specific port or path it is a router matcher
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
//Whenever someone connects this gets executed
io.sockets.on('connection', function (socket) {
    connections.push(socket)
    console.log('Connected :  %s socket connected', connections.length);
    socket.on('new_msg', function (data) {
        console.log(data);
    })
    socket.emit('send_msg', 'hellobuddy');
})
//Whenever someone disconnects this piece of code executed
io.on('disconnect', function (data) {
    console.log('Disconnected : %s socket connected', connections.length);
})
