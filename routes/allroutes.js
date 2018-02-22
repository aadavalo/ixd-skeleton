var data = require('../data.json');

exports.view = function(req, res){
  	res.render('allroutes', data)
};

exports.addFavorite = function(req, res){
	var fav = req.query.fav;
	data.favedroutes.push(newfavorite);
}

