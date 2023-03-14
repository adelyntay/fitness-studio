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

router.get('/register/:id', async function(req, res, next) {
  const Class = require('../models/class');
  const classDoc = await Class.findById(req.params.id);
  res.render('register', { classDoc });
});

router.post('/register/:id', async function(req, res) {
  const Class = require('../models/class');
  const { name, email } = req.body;
  const classDoc = await Class.findById(req.params.id);
  const registration = { name, email };
  classDoc.registration.push(registration);
  await classDoc.save();
  res.redirect('/list');
});

module.exports = router;
