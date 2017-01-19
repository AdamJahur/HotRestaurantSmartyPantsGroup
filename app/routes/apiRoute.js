var tables = require('../data/tables.js');
var waitlist = require('../data/waitlist.js');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.get('/api/tables', function(req, res){
		res.json(tables);
	});
	app.get('/api/waitlist', function(req, res){
		res.json(waitlist);
	});
	app.post('/api/reserve', function(req, res) {
		var table = req.body;
		if(tables.length <= 5){

			tables.push(table);
			return true;

		} else{
			waitlist.push(table);
			return false;
		}
		res.end('Reservation added');
	});
};