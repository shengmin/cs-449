'use strict';

var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/static'));

app.get('/', function(reqeust, response) {
	response.redirect('/view/task-list.htm');
});

app.listen(process.env.VCAP_APP_PORT || 3000);
