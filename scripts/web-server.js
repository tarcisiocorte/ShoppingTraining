var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

console.log("Path: " + rootPath);

app.use(express.static(rootPath + '/app'));

app.listen('9000');
console.log('Server is running on port 9000....');