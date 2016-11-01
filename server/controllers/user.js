var
  User = require('../models/User.js')

module.exports = {
  create,
  show,
  update,
  destroy,
  createListing
}

//show all users with their interactions

//create a new user profile
function create(req, res){
  User.create(req.body, function(err, user){
    if(err) return console.log(err)
    res.json({success: true, message:"Test"})
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
function update(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user){
    if(err) console.log(err)
    res.json({success: true, message: "profile updated!", user: user})
    //res.redirect('/user/:id')
  })
}

//delete profile
function destroy(req, res){
  User.findByIdAndRemove(req.params.id, function(err){
    if(err) console.log(err)
    res.json({success:true, message: "sadly, your profile was deleted!"})
    //res.redirect('/logout')
  })
}

//create a listing through the user id:
function createListing(req, res){
  User.findById(req.params.id, function(err, user){
    if(err) console.log(err)
    //create a listing object
    console.log(req.body)
    var newListing = new Listing(req.body)
    //store listing to user
    newListing._by = user.id
    //save listing to database
    newListing.save(function(err){
      if(err) return console.log(err)
      //push listing to array [newListing]
      user.listings.push(newListing)
      //save and send back json database
      user.save(function(err){
        if(err) return console.log(err)
        res.redirect('/user/' +newListing._id)
      })
    })
  })
}
