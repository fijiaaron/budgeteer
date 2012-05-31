/**
 * Accounts
 *
 */
var util = require('util');
var Account = require('./model/account');

var accounts = [
	{
		id: 0, 
		name: "Account Zero"
	},
	{
		id: 1, 
		name: "Account One"
	},
	{
		id: 2, 
		name: "Account Two"
	}
];	

exports.index = function (request, response) 	{
	response.send("Accounts!");

	// json: function(request, response) {
	// 	response.send(JSON.stringify(account));
	// }
};

exports.show = function(request, response) {
	response.send(JSON.stringify(request.account));
};

exports.new = function(request, response) {
	response.send('accounts#new ' + getData());
};

exports.create = function(request, response) {
	response.send('accounts#create ' + getData());
};

exports.edit = function(request, response) {

	response.send('accounts#edit ' + getData());
};

exports.update =  function(request, response) {
	response.send('accounts#update ' + getData());
};

exports.destroy =  function(request, response) {
	response.send('accounts#destroy ' + getData());
};

exports.load = function(id, callback) {
	var account = new Account(id);
//	callback(null, {id: id, name: "Product # " + id});


	callback(null, account);
}

