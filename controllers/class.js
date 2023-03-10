const Class = require('../models/class');

module.exports = {
	new: newClass,
  create,
  index,
  update,
  delete: del
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
  const classes = await Class.find({});
  res.render('class/all', { title: 'All Classes', classes });
}

async function update(req, res) {
  const { classId } = req.params;
  const updatedClass = await Class.findByIdAndUpdate(classId, req.body, { new: true });
  res.status(200).json(updatedClass);
}

async function del(req, res) {
  try {
    const { id } = req.params;
    const classes = await Class.findByIdAndDelete(id).exec();
    if (classes) {
      console.log('class deleted: ' + classes._id);
    } else {
      console.log('class not found: ' + id);
    }
    res.redirect('/class/all');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}
