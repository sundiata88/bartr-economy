var
  express = require('express'),
  usersRouter = express.Router(),
  usersCtrl = require('../controllers/user.js')


usersRouter.route('/user')
  // .get(usersCtrl.index)
  .post(usersCtrl.create)
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

usersRouter.route('/user/:id')
  // .get(listingCtrl.show)

module.exports = usersRouter
