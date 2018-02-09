
/*
 * GET home page.
 */
var statusData = require ('../status-data.json');

exports.view = function(req, res){
  res.render('accounts', statusData)
};