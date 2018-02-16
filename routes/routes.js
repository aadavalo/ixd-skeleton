var statusData = require ('../data.json');

exports.view = function(req, res){
  res.render('routes', statusData)
};