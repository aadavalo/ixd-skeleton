var data = require('../data.json');

exports.addFavorite = function(req, res) {
	var newfav = {
		"route": bus
	};
	data.favedroutes.push(newfav);
	console.log(newfav);
	res.render("allroutes", newfav);
}
