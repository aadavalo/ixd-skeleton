var data = require("../data.json");

exports.view = function(req, res) {
	var routeToShow = req.params.route;
	res.render('faved-routes'); //how come this works with or without any parameters inside res.render??
	//data.friends.push(newFriend);
}