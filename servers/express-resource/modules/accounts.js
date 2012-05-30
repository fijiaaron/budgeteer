/**
 * Account
 *
 */
var util = require('util');

exports.index = {
	json: function(request, response) {
		var account = {
				id: 0, 
				name: "Account 0"
		};

		response.send(JSON.stringify(account));
	}
};

exports.show = function(request, response) {
	response.send('accounts#show ' + util.inspect(request.account));
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

	callback(null, account);
}

