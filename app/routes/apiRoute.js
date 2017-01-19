var tables = require('../data/tables.js');
var waitlist = require('../data/waitlist.js');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
	app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json 
app.use(bodyParser.json())

// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))

	app.get('/api/tables', function(req, res){
		res.json(tables);
	});

	app.get('/api/waitlist', function(req, res){
		res.json(waitlist);
	});

	app.post('/api/tables', function(req, res) {
		var table = req.body;

		console.log(table);

		if(tables.length <= 5){

			tables.push(table);
			var flag = "true";

		} else{
			waitlist.push(table);
			var flag = "false";
		}
		res.end(flag);
	});
};