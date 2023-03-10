const Class = require('../models/class');

module.exports = {
	new: newClass,
};

function newClass(req, res) {
    res.render('class/new');
  }


