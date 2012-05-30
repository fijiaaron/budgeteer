// budgeteer-api.js

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


budgeteer_api_v1_docs = "Budgteer API v1";

app.get('/api/v1', function(request, response) {
	response.send(budgeteer_api_v1_docs);
});

/**
 * Load modules to handle web service requests
 */
var account_handler = require('./modules/accounts');
var budget_module = require('./modules/budgets');
var expense_module = require('./modules/expenses');

/** 
 * Define API routes 
 */

var accounts = app.resource('accounts', account_handler, { format: 'json' });


app.listen(4000);