var util = require('util');

exports.index = function(request, response) {
	response.send("Products!");
};

exports.show = function(request, response) {
	response.send('products#show ' + util.inspect(request.product));
};

exports.new = function(request, response) {
	response.send('products#new');
};

exports.create = function(request, response) {
	response.send('products#create');
};

exports.edit = function(request, response) {
	response.send('products#edit '  + util.inspect(request.product));
};

exports.update =  function(request, response) {
	response.send('products#update ' + util.inspect(request.product));
};

exports.destroy =  function(request, response) {
	response.send('products#destroy ' +  util.inspect(request.product));
};

exports.load = function(id, callback) {
	callback(null, {id: id, name: "Product # " + id});
}