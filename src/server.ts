const http = require('http');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');

import router from './controllers/indexController';

var inProduction = process.env.NODE_ENV === 'production';

// Global app object.
const app = express();

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use(router);

if (!inProduction) {
    app.use(errorhandler);
}

// Database
if (!inProduction) {
    const database = require('./config/database');
} else {
    // TODO: Setup production database.
}

var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function() {
    console.log(`Server started on port: ${PORT}`);
})
