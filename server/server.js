var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models
var models = require('./models/tvshows');

// Import Controllers
var TVShowCtrl = require('./controllers/tvshows');

// Import Routes
var tvshows = require('./routes/tvshows');
app.use('/api', tvshows);

/*
var router = express.Router();

router.get('/', function(req, res) {
  res.send("Hello world!");
});

app.use(router);
*/

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});