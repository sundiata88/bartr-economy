# bartr-economy

bartrEconomy is an application that allows users to voluntarily exchanges goods and services without the inconvenience of man-made currency. Users create community centered around bartering and comparing old interactions to gauge impending exchanges. Bartr uses an old tool of social commerce in our modern web-based time.

Technologies used: MEAN stack, HTML, CSS, Heroku, Github

User stories:
 - User will be able to create profiles that will allow them to post listings of a service or product available for barter.
 - Users will be able to reply to listings.
 - Users will be able to respond to listings and collect 'matches' on their profile. 
 
 Unsolved problems:
  - AuthService errors
  - Connecting 'matches' to profiles.
  - Update and delete functioning 
  
 Data Models:
 User = new Schema({
  username: String,
  password: String,
  email: String,
  description: String,
  listing: [{type: mongoose.Schema.Types.ObjectID, ref: 'Listing'}]
})

listingSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    acceptedBy: String,
    _by: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
  }, {timestamps: true})  


