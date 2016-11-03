// user model
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose')

var User = new Schema({
  username: String,
  password: String,
  email: String,
  description: String,
  //listing: [{type: mongoose.Schema.Types.ObjectID, ref: 'Listing'}]
})

User.plugin(passportLocalMongoose)


module.exports = mongoose.model('users', User)
