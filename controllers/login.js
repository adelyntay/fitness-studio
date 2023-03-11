const User = require('../models/user');
const Admin = require('../models/admin')

module.exports = {
    login
};

function login(req, res) {
    res.render('login');
  }