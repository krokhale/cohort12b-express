var express = require('express');
var router = express.Router();

/* GET users listing. */
// /users + '/'
// /users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET
// POST
// PUT
// DELETE
router.get('/john/:userId/profile', function(req, res, next) {
  console.log('the params are', req.params)
  // write code that fetches the profile from the DB for userId = req.params.userId
  res.json({success: true});
});

router.get('/john', function(req, res, next) {
  console.log(req.query)
  // write code to fetch information from db
  // manipulate information
  // finally respond back with the response/json data to the browser
  res.json({success: true});
});

module.exports = router;
