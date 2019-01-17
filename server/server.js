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
const dbConfig = require('./config/database_config.js');
const mongoose = require('mongoose');
const port = 3001
const router = require('./routes/routes');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router);
// Configuring the database
mongoose.Promise = global.Promise;
// Connecting to the database
    mongoose.connect(dbConfig.url,
    {
        useNewUrlParser: true
    }).then(() => 
    {
        console.log("Successfully connected to the database");
    }).catch(err => 
        {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))