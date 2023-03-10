const Class = require('../models/class');

module.exports = {
	new: newClass,
  create,
  index
};

function newClass(req, res) {
    res.render('class/new');
  }

async function create(req, res) {
    try {
      const newClass = await Class.create(req.body);
      res.redirect('/class/new');
    } catch (err) {
      console.error(err);
      res.redirect('/class');
    }
  }
  
  async function index(req, res) {
    try {
    const classes = await Class.find({});
    res.render('class/all', { title: 'All Classes', classes });
    } catch (err) {
    // handle error here
    }
    }