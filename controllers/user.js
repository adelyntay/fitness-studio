const User = require('../models/user');

module.exports = {
    login,
    register,
    create
};

function login(req, res) {
    res.render('user/login');
  }

function register(req, res) {
    res.render('user/register');
  }

async function create(req, res) {
  try {
    const register = await User.create(req.body);
    res.redirect('user/login');
  } catch (err) {
    console.error(err);
  }
}