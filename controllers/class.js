const Class = require('../models/class');

module.exports = {
	new: newClass,
  create,
  index,
  delete: del,
  edit,
  update
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

async function edit(req, res) {
  const { id } = req.params; 

  try {
    const classes = await Class.findById(id).exec();
    const context = { id, classes };
    res.render('class/edit', context);
  } catch (error) {
    console.log(error);
  }
};

async function update(req, res) {
  const { id } = req.params;
  const { classType, instructor, level, date } = req.body;

  try {
    await Class.updateOne({ _id: id }, { classType, instructor, level, date });
    res.redirect(`/class/${id}`);
  } catch (error) {
    console.log(error);
  }
};