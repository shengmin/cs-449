'use strict';

var express = require('express');
var data = require('./node/data');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.compress());
app.use(express.static(__dirname + '/static'));

app.get('/', function(reqeust, response) {
  response.redirect('/task');
});

app.get('/:type', function(request, response) {
  response.render(request.params.type + '-list', data);
});

app.listen(process.env.VCAP_APP_PORT || 3000);
