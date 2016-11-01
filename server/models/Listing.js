var
  mongoose = require('mongoose'),

  listingSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    acceptedBy: String,
    _by: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
  }, {timestamps: true})


  var Listing = mongoose.model('Listing', listingSchema)
  module.exports = Listing
