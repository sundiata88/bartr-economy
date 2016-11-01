var
  Listing = require('../models/Listing.js'),
  User = require('../models/User.js')

  module.exports = {
    index,
    show,
    update,
    destroy,
    createListing
  }

  //index of all listings
  function index(req, res){
    Listing.find({}, function(err, listings){
      if(err) return console.log(err)
      res.json(listings)
    })
  }

  //show a specific listing
  function show(req, res){
    Listing.findById(req.params.id).populate('listing'){
      if(err) return console.log(err)
      res.json(listing)
    }
  }
  //update a listings
  function update(req, res){
    Listing.findByIdAndUpdate(req.params.id, req.body, {new: true},
      function(err, listing){
        res.json({message: "listing updated", updateListing: listing})
    })

  //delete a listings
  function destroy(req, res){
  Listing.findByIdAndRemove(req.params.id, function(err, listing){
    if(err){
      console.log(err);
    } ese {
      res.json(message: "Listing deleted")
    }
  }

  //create a listing under user id specifications
  function createListing(req, res){
  Listing.create(req.body, function(err, quote){
    if(err){
      console.log(err);
    } else {
      res.json({
        message: "Listing added",
        newListing: listing
      })
    }
  })



//show all listings
//create new listings
//post new listing to list of listings
//edit listing
//delete listing
//show listing on profile
