var path = require('path');

module.exports = function (app) {

	app.get('/', function(req, res) {
		res.sendFile(path.join(_dirname + '/../public/home.html'));
	});

	app.get('/tables', function(req, res) {
		res.sendFile(path.join(_dirname + '/../public/tables.html'));
	});

	app.get('/reserve', function(req, res) {
		res.sendFile(path.join(_dirname + '/../public/reserve.html'));
	});
};