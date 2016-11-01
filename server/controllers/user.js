var
  User = require('../models/User.js')

module.exports = {
  create,
  show,
  update,
  destroy
}

/show all users with their interactions

//create a new user profile
function createUser(req, res){
  User.create(req.body, function(err, user){
    if(err) return console.log(err)
    res.json({success: true, message:})
  })
}

//exhibit basic profile (needs image and basic tagline with word minimum)
function show(req, res){
  User.findById(req.params.id, function(err, user){
    if(err) return console.log(err)
    res.render('user', {user, listings})
  })
}

//edit profile

//delete profile
//view that anybody other than the profile owner sees
