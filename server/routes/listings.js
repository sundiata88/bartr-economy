var Listing = require('../models/Listing.js')
var User = ('../models/User.js')
var express = require('express')
var listingsRouter = express.Router()
var listingsCtrl = ('../controllers/listings.js')

listingsRouter.route('/listings')
//make sure all methods in controllers are exported here as well
  .get(listingsCtrl.index)
  // .get(listingsCtrl.show)
  .post(listingsCtrl.create)

  listingsRouter.route('/listings/:id')
  .get(listingsCtrl.show)
  .delete(listingsCtrl.destroy)
  .patch(listingsCtrl.update)


module.exports = listingsRouter
