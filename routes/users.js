var express = require('express');
var router = express.Router();
const {
  list
} = require('./cars/cars.service');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log('running');
  const result = await list();
  res.send(result);
});

module.exports = router;
