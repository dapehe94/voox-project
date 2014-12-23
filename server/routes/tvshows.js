//File: routes/tvshows.js
var express = require('express');
var tvshows = express.Router();

// Import Controllers
var TVShowCtrl = require('../controllers/tvshows');

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);    

module.exports = tvshows;