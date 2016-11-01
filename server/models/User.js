// var
//   Schema = mongoose.Schema;


var
mongoose = require('mongoose'),
userSchema = new mongoose.Schema({
  local: {
    name: String,
    email: String,
    password: String,
    description: String,
    //listing: [{type: mongoose.Schema.Types.ObjectID, ref: 'Listing'}]
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
