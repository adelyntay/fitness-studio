var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user')

router.get('/login', userCtrl.loginPage);

router.get('/signup', userCtrl.signup);

router.post('/', userCtrl.create);

router.post('/login', userCtrl.login);

router.get('/homepage', userCtrl.homepage);

router.get('/logout', userCtrl.logout);

module.exports = router;