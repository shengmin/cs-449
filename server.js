'use strict';

var express = require('express');
var data = require('./node/data');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.compress());
app.use(express.static(__dirname + '/static'));

app.get('/', function(reqeust, response) {
  response.redirect(301, '/task');
});

app.get('/:type', function(request, response) {
  response.render(request.params.type + '-list', data);
});

app.get('/:type/:id', function(request, response) {
  var params = request.params;
  var type = params.type;
  var id = params.id;
  var viewData = {
    type: type,
    id: id
  };
  viewData[type] = data[type + 's'][id];
  response.render(type + '-detail', viewData);
});

app.listen(process.env.VCAP_APP_PORT || 3000);
