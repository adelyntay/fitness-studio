const Class = require('../models/class');
const dayjs = require("dayjs");

module.exports = {
	new: newClass,
  create,
  index,
  delete: del,
  edit,
  update,
  show,
  
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
  const filter = req.query.classType || '';
  const classes = await Class.find(filter ? { classType: filter } : {}).exec();
  const classTypes = await Class.distinct('classType').exec();
  res.render('class/all', { title: 'All Classes', classes, classTypes, dayjs, selectedFilter: filter });
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

async function show(req, res) {
  try {
    const classId = req.params.id;
    const classes = await Class.findById(classId);
    const registeredMembers = classes.registration.map(registration => {
      return { name: registration.name, email: registration.email };
    });
    res.render('class/show', {classes, registeredMembers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

