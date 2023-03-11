var express = require('express');
var router = express.Router();
var loginCtrl = require('../controllers/login')

router.get('/', loginCtrl.login);
  
  module.exports = router;