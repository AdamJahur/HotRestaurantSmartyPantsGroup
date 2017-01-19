var path = require('path');

module.exports = function (app) {

	app.get('/', function(req, res) {
		res.sendFile(path.join(_dirname + '../app/public/home.html'));
	});

	app.get('/tables', function(req, res) {
		res.sendFile(path.join(_dirname + '../app/public/tables.html'));
	});

	app.get('/reserve', function(req, res) {
		res.sendFile(path.join(_dirname + '../app/public/reserve.html'));
	});
};