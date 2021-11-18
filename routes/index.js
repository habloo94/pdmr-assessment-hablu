var express = require('express');
var router = express.Router();
var db = require('../model/db/connection');
var cars = require('./cars/cars.service');
var users = require('./cars/cars.service');


/* GET home page. */
router.get('/', async function(req, res, next) {
  // res.json('kkk')
  try {
    var result = await cars.list();
    res.render('pages/home', {
      title: 'Used Car List',
      page: 'home',
      data: result[0]
    });
  } catch (error) {
    res.render('pages/error', {
      title: 'Used Car List',
      page: 'home',
      error: error.message
    });
  }
});

module.exports = router;
