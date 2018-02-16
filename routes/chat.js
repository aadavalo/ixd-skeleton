<<<<<<< HEAD




=======
>>>>>>> 3496b48821fef29dbf2a8543527bcc2b61a2ad95
var statusData = require ('../data.json');

exports.view = function(req, res){
  res.render('chat', statusData)
};