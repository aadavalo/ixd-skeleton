



var statusData = require ('../data.json');

exports.view = function(req, res){
  res.render('chat', statusData)
};