var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get('/list', async function(req, res) {
    const Class = require('../models/class');
    const classes = await Class.find({});
    res.render('list', { classes });
});


module.exports = router;
