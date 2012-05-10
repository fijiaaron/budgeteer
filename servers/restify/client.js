// client.js

var assert = require('assert');
var restify = require('restify');
						
var client = restify.createJsonClient({
  url: 'http://localhost:3000',
  version: '~1.0'
});


var arg = "World";


if (process.argv[2]) {
	arg = process.argv[2];
}

function echo(value) {
	this.url  = '/echo/' + value,
	this.handler = function(err, request, response, obj) {
		assert.ifError(err);
		console.log('Server returned: %j', obj);
	}
};

function hello(name) {
	this.url = '/hello/' + name,
	this.handler =  function(err, request, response, obj) {
		assert.ifError(err);
		console.log('Hello, %s!', obj.name);
	}
};

function account(id) {
	this.url = '/account/' + id,
	this.handler =  function(err, request, response, obj) {
		assert.ifError(err);
		console.log('Account: %j', obj);
	}
};

var e = new echo(arg); 
client.get(e.url, e.handler);

var h = new hello(arg);
client.get(h.url, h.handler);

var a = new account(arg);
client.get(a.url, a.handler);