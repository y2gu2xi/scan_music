var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('client', { title: 'Processing...' });
});

module.exports = router;
