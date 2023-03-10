var express = require('express');
var router = express.Router();
var classesCtrl = require('../controllers/class')

router.get('/all', classesCtrl.index);

router.get('/new', classesCtrl.new);

router.post('/', classesCtrl.create);

module.exports = router;