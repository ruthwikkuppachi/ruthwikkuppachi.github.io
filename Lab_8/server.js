const express = require('express')
const app = express()
const http = require('http');

// Code here for how to set 'public' as the static folder for express
app.use(express.static('public'));
// Code here to have the app listen on port 8080....please provide a console.log message
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
}).listen(8080);
console.log('Server running on port 8080');