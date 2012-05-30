
function Account(id) {
	find(id);
	this.users = [];
	this.budgets = [];
}

Account.prototype.find=find;

function find(id) {
	this.id = id
	this.name = accounts[id];
}

module.exports = Account;

var accounts = ['Account 1' , 'Account 2', 'Account 3'];