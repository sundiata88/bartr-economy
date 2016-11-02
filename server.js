var
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  //apiRoutes = require('./routes/listings.js'),
  userRoutes = require('./server/routes/users.js'),
  logger = require('morgan'),
  app = express(),
  PORT = process.env.port || 3000

  mongoose.connect('mongodb://localhost/finalProject', function(err){
    console.log(err || "Connected to MongoDB")
  })

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(express.static('client'))

  app.get('/', function(req, res){
    // res.sendFile('./client/index.html', {root: './'})
    res.send({message: "I hope it works"})
  })

  // app.use('/api', apiRoutes)
  app.use('/', userRoutes)

  app.listen(PORT, function(err){
    console.log(err || "Server runnin on " + PORT)
  })
