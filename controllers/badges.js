const Dbase = require('../models/dbase');

module.exports = {
  createBadge,
  delete: dDeleteBadge,
  showBadge,
  updateBadge,
  editBadge, 
};

//-------------------------------------------------
function createBadge(req, res, next) {
  // console.log(req.body)
  req.user.badge.push(req.body);
  // console.log('USER',req.user)
  // console.log('BODY',req.body)
  req.user.save(function(err) {
    res.redirect('/dbases');
  });
  console.log('CREATEd BADGE FIRED!')
}
//-------------------------------------------------
function dDeleteBadge(req, res, next) {
// Remove a destination from the user
  Dbase.findById(req.user._id, function(err, user) {
     if ( user ) {
       // Find subdoc
       var subdoc = user.badge.id(req.params.id);
       // Remove subdoc
       subdoc.remove();
       // Save user
       user.save(function (err) {
         if (err) return handleError(err);
       });             
     }
  });
  res.redirect('/dbases');
  console.log('DELETE X FIRED!')
};
//-------------------------------------------------
function showBadge(req, res){
  const userid = req.params.id;
  
  Dbase.findById(userid, function(err, users, userid) {
    res.render('dbases/badge', {
      users, 
      user: req.user,
    });
  });
  console.log('SHOW X FIRED!')
};
//-------------------------------------------------
function updateBadge(req, res){ 
  // Update a destination from the user
  Dbase.findById(req.user._id, function(err, user) {
    if ( user ) {
      // Find subdoc
      var subdoc = user.badge.id(req.params.id);
      // update subdoc
      subdoc.set(req.body);
      // Save to user
      user.save(function (err) {
        if (err) return handleError(err);
      }); 
    }
  });
  res.redirect('/dbases');
  console.log('UPDATE X FIRED!')
};
//-------------------------------------------------
function editBadge(req, res){
  Dbase.find(function(err, users) {
        // console.log(req.params)
    res.render('dbases/:id/badge', {
      users, 
      user: req.user
    });
  });
  console.log('EDIT X FIRED!')
};
//-------------------------------------------------