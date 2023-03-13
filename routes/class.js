var express = require('express');
var router = express.Router();
var classesCtrl = require('../controllers/class');
// var { isAdmin } = require('../middlewares/auth');

// router.use(isAdmin);

router.get('/all', classesCtrl.index);

router.get('/new', classesCtrl.new);

router.post('/', classesCtrl.create);

router.get('/:id', classesCtrl.edit)

router.put('/:id', classesCtrl.update);

router.delete('/:id', classesCtrl.delete);

router.get('/details/:id', classesCtrl.show);

module.exports = router;