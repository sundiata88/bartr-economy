var
  express = require('express'),
  mongoose = require('mongoose'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  expressSession = require('express-session'),
  hash = require('bcrypt-nodejs')
  //apiRoutes = require('./routes/listings.js'),
  userRoutes = require('./server/routes/users.js'),
  logger = require('morgan'),
  app = express(),
  path = require('path'),
  passport = require('passport'),
  passportConfig = require('./server/config/passport.js')
  PORT = process.env.port || 3000

  mongoose.connect('mongodb://localhost/finalProject', function(err){
    console.log(err || "Connected to MongoDB")
  })

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(express.static('client'))

  app.use(passport.initialize())
  app.use(passport.session())
//  app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile('/client/index.html', {root: './'})
})
  app.get('/', function(req, res){
    // res.sendFile('./client/index.html', {root: './'})
    res.send({message: "I hope it works"})
  })

  // app.use('/api', apiRoutes)
  app.use('/', userRoutes)

  app.listen(PORT, function(err){
    console.log(err || "Server runnin on " + PORT)
  })
