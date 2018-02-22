var data = require('../data.json');

exports.addFavorite = function(req, res) {
	var newfav = {
		"route": req.query.bus
	};
	data.favedroutes.push(newfav);
	console.log(newfav);
	res.render("allroutes", newfav);
}
