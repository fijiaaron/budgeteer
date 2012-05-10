//server.js

var restify = require('restify');




function Account(id, name, email) {
	this.id = id;
	this.name = name;
	this.email = email;
}

function account_lookup(id) {
	var accounts = {
		"Aaron" : new Account(1, "Aaron", "aarone@one-shore.com"),
		"Bob" : new Account(2, "Bob", "bob@example.com"),
		"Charlie" : new Account(3, "Charlie", "charlie@msn.com"),
	};

	return accounts[id];
}1




var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:value', function (request, response, next) {
  response.send(request.params);
  return next();
});

server.get('/hello/:name', function (request, response, next) {
  response.send(request.params);
  return next();
});


server.get('/account/:id', function (request, response, next) {
  var account_id = request.params.id;
  console.log("account id: " + account_id);

  var account = account_lookup(account_id);
  response.send(account);
  return next();
});


server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
