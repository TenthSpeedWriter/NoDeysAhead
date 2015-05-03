/*jslint node: true*/
/*jslint nomen: true*/

'use strict';

var express = require('express');
var mongodb = require('mongodb');
var debug   = require('debug');
var http    = require('http');

var app = express();

app.get('/graveyard/:stiffID', function (req, res) {
    // Pull the record for req.params.stiffID from stiffID
});

var server = app.Listen(8889, function () {
	var host, port = [server.address().address,
			  server.address().port];
	console.log('NoDeysAhead now running on port' + port);
});
