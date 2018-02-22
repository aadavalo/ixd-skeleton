var data = require('../data.json');

exports.view = function(req, res){
  	res.render('allroutes', data)
};

exports.addFavorite = function(req, res) {
	var fav = req.query.fav;
	data.favedroutes.push(newfavorite);
}

exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;
	if (projectID == "random") {
		projectID = Math.floor(Math.random() * projects.length) + 1;
	} else {
		projectID = parseInt(projectID);
	}

  	var project = data[projectID-1]; // of by one, our first project has index 0
  	res.json(project);
}