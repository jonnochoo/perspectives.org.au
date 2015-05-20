var bodyParser = require('body-parser')
var config = require("./config");
var express = require('express');
var path = require('path');
var routes = require('./routes');
var staticRouter = require('./routes/static');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', staticRouter('views'));
app.use('/', routes);

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

app.listen(config.express.port, function(){
  console.log('Express server listening on port ' + config.express.port);
});
