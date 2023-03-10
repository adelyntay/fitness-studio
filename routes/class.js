var express = require('express');
var router = express.Router();
var classesCtrl = require('../controllers/class')

router.get('/new', classesCtrl.new);

module.exports = router;