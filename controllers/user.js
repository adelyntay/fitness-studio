const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  loginPage,
  signup,
  create,
  login,
  homepage,
  isAuth,
  logSession,
  logout
};

function loginPage(req, res) {
  res.render('user/login');
}

function signup(req, res) {
  res.render('user/signup');
}

function homepage(req, res) {
  res.render('user/homepage');
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

async function login(req, res) {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email }).exec();
  if (user === null) {
    res.render('user/login');
    return;
  }
  
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      req.session.user = user;
      console.log(req.session.user);
      const redirectUrl = user.role === 'admin' ? '/admin' : '/user/homepage';
      console.log(`${user.email}, ${user.role} logged in.`);
      res.redirect(redirectUrl); 
    } else {
      res.render('user/login');
    }
  });
}

async function isAuth(req, res, next) {
  const user = req.session.user;
  console.log('user:', user);
  if (user && user.role === 'admin') {
    return next();
  } else {
    const context = { message: 'Restricted Access',
    error: {
      status: 403,
      stack: 'Access Denied'
    }
  };
    res.render('error', context);
  }
}
  
function logSession(req, res, next) {
  console.log(req.session);
  next();
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/user/login');
  });
}