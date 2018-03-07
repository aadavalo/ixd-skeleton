
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var index = require('./routes/index');
var allroutes = require('./routes/allroutes');
var add = require('./routes/add');
var page_B = require('./routes/page_B');
var page_A = require('./routes/page_A');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var data = require('./data.json');
app.get('/', login.view);
app.get('/index', index.view);
app.get('/routeA*', function(req,res){
	res.render('allroutes', data);
	var bus = req.query.bus;
	// something like
	// make a list based on data."bus" and 
	// display or fill in this list somewhere
});
app.get('/routeB*', function(req,res){
	res.render('page_B', data);
	var bus = req.query.bus;
});
app.get('/fav*', function(req, res) {
	var newfav = {
		"route": req.query.bus
	};

	if(data.favedroutes.length === 0){
		data.favedroutes.push(newfav);
	}
	else{
		var i = 0;
		var lengy = 0;
		data.favedroutes.forEach(function(route){
			if (route.route===newfav.route) {
				lengy = data.favedroutes.indexOf(route);
				i=1;
			}
		});
		if (i===1){
			data.favedroutes.splice(lengy, 1);
			res.send("showAlert");
		}
		else{data.favedroutes.push(newfav);
			res.send("Favorited");}
	}
});
app.get('/stops*', function(req, res){
	data.currentStops = [];
	var routeName = req.query.stop;
	data[routeName].forEach(function(stop){
		data.currentStops.push(stop);
	});
});

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//pls
