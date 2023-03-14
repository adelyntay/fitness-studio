const Class = require('../models/class');

module.exports = {
    create
};

async function create(req, res) {
    try {
      const registered = await Class.findById(req.params.id);
      registered.registration.push(req.body);
      // await registered.save();
      res.redirect(`/class/${_id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// async function create(req, res) {
//   try {
//     const newClass = await Class.create(req.body);
//     res.redirect('/class/new');
//   } catch (err) {
//     console.error(err);
//     res.redirect('/class');
//   }
// }