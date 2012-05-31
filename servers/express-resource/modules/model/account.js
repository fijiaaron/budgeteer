
function Account(id) {
	this.find(id);
}

Account.prototype.find=find;

function find(id) {
	this.id = id;
	this.name = accounts[id].name;
	this.users = accounts[id].users;
	this.budgets = accounts[id].budgets;
}

module.exports = Account;

var accounts = [
	{
		name: 'Account One',
		users: [
			{username: 'aaron', password: 'evans'},
			{username: 'andres', password: 'delosreyes'}
		],
		budgets: [
			{name: 'monthly'},
			{name: 'christmas'}
		]
	},
	{
		name: 'Account Two',
		users: [
			{username: 'aaron', password: 'evans'}
		],
		budgets: [
			{name: 'weekly'}
		]
	},
	{
		name: 'Account Three',
	}
];