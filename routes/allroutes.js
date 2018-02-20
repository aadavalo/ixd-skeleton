var data = require('../data.json');

exports.view = function(req, res){
	var routeName = req.params.routeName;
  	res.render('allroutes', data)
};

