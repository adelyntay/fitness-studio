var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user')

router.get('/login', userCtrl.login);

router.get('/register', userCtrl.register);

router.post('/', userCtrl.create);
  
module.exports = router;