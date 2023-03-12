const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    const { password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
      ...req.body,
      password: hashedPassword
    };

    const register = await User.create(user);
    res.redirect('user/login');
  } catch (err) {
    console.error(err);
  }
}