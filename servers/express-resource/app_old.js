var express = require('express');

// Modules
var forums = require('./modules/forums');
var products = require('./modules/products');

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

app.get('/products', function(request, response) {
	response.send('products#index');
});

app.get('/products/:id', function(request, response) {
	response.send('products#show ' + request.params.id);
});

app.get('/products/new', function(request, response) {
	response.send('products#new');
});

app.put('/products', function(request, response) {
	response.send('products#create');
});

app.get('/products/:id/index', function(request, response) {
	response.send('products#edit ' + request.params.id);
});

app.post('/products/:id', function(request, response) {
	response.send('products#update ' + request.params.id);
});

app.delete('/products/:id', function(request, response) {
	response.send('products#delete '  + request.params.id);
});
app.listen(4000);