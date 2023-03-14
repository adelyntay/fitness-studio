var express = require('express');
var router = express.Router();
var registerCtrl = require('../controllers/register');

router.post('/class/:id/register', registerCtrl.create)

module.exports = router;