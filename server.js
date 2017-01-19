var express = require('express');
var app = express();
require('./app/routes/apiRoute')(app);
require('./app/routes/htmlRoute')(app);

app.set('port', 3000);

app.listen(app.get('port'), function() {
	console.log("Server listening on %s", app.get('port'));
});