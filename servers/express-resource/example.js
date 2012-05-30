express_resource = require('express-resource');

exports.index = function(request, response) {
	response.send('index');
}

exports.new = function(request, response) {
	response.send('new');
}

exports.create = function(request, response) {
	response.send('create');
}

exports.show = function(request, response) {
	response.send('show');
}

exports.edit = function(request, response) {
	response.send('edit');
}

exports.update = function(request, response) {
	response.send('');
}


