var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user')

router.get('/login', userCtrl.loginPage);

router.get('/signup', userCtrl.signup);

router.post('/', userCtrl.create);

router.post('/login', userCtrl.login);

// router.get('/secret', userCtrl.secret);

router.get('/homepage', userCtrl.homepage);

module.exports = router;