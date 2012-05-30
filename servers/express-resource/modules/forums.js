var util = require('util');

exports.index = {
	//response.send("Forums!" );

	xml:  function(request, response) { response.send("forums in xml"); },
	json:  function(request, response) { response.send("forums in json") }
};

exports.show = function(request, response) {
	response.send('forums#show ' + util.inspect(request.product) + 	 util.inspect(request.forum));
};

exports.new = function(request, response) {
	response.send('forums#new ' + getData());
};

exports.create = function(request, response) {
	response.send('forums#create ' + getData());
};

exports.edit = function(request, response) {

	response.send('forums#edit ' + getData());
};

exports.update =  function(request, response) {
	response.send('forums#update ' + getData());
};

exports.destroy =  function(request, response) {
	response.send('forums#destroy ' + getData());
};

exports.load = function(id, callback) {
	callback(null, {id: id, name: "Forum # " + id});
}

function getData(request) {
	return "Product: " + request.product.id + "Forum: " + request.forum.id;
}