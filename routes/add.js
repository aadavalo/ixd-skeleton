var data = require('../data.json');

exports.addfavorite = function(req, res) {
	var newfav = {
		"route": req.query.bus
	};
	data.favedroutes.push(newfav);
	res.render("allroutes", newfav);
}
///////////////////////////////////////////////////////
