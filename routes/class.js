var express = require('express');
var router = express.Router();
var classesCtrl = require('../controllers/class')

router.get('/all', classesCtrl.index);

router.get('/new', classesCtrl.new);

router.post('/', classesCtrl.create);

router.put('/:id', classesCtrl.update);

router.delete('/:id', classesCtrl.delete);

module.exports = router;