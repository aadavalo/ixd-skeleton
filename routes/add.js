var data = require('../data.json');

exports.addfavorite = function(req, res) {
	var newfavorite = {
		"route": req.query.route
	};
	data.favedroutes.push(newfavorite);
}
///////////////////////////////////////////////////////


exports.addMesa = function(req, res) {
	var newfavorite = {
		"route": "Mesa Shuttle"
	};
	console.log(newfavorite);
	data.favedroutes.push(newfavorite);
 }