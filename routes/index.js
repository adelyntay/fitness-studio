var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get('/list', async function(req, res) {
  const Class = require('../models/class');
  const filter = req.query.classType || '';
  const classes = await Class.find(filter ? { classType: filter } : {}).exec();
  const classTypes = await Class.distinct('classType').exec();
  res.render('list', { classes, classTypes, selectedFilter: filter });
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
