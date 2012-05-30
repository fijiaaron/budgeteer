var express = require('express');
require('express-resource');

var app = express.createServer();

app.configure(function() {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(app.router);
});

app.configure('development', function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.errorHandler({dumpExceptions : true, showStack: true}));
});

app.configure('production', function() {
	var oneYear = 31557600000;
	app.use(express.static(__dirname + '/public', {maxAge: oneYear}));
	app.use(express.errorHandler());
});

var products = app.resource('products', require('./modules/products'));
var forums = app.resource('forums', require('./modules/forums'));
var accounts = app.resource('accounts', require('./modules/accounts'), { format: 'json' });

products.add(forums);


app.get('/fish/:color/qty/:number', function(request, response) {
	response.send(request.params.number + ' fish ' + request.params.color + ' fish');
});


app.listen(4000);