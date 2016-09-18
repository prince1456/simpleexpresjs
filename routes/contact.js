var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next){
res.render('contact/contact', {departments: ["sale" , "marketing", "technical"]});

})
router.post('/', function(req, res, next){
  res.end("we recieve your massage! ")
})
module.exports = router;
