'use strict';

var express = require('express');
var data = require('./static/js/data');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.compress());
app.use(express.static(__dirname + '/static'), { maxAge: 3600 * 24});

app.get('/', function(reqeust, response) {
  response.redirect(301, '/task');
});

app.get('/:type', function(request, response) {
  response.render(request.params.type + '-list', data);
});

app.listen(process.env.PORT || process.env.VCAP_APP_PORT || 3000);
