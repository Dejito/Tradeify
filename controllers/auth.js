const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: 'auth//signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  console.log("=== LOGIN ATTEMPT START ===");
  console.log("Email:", email);

  User.findOne({ email: email })
    .then(user => {
      console.log("User lookup completed");

      if (!user) {
        console.log("No user found with email:", email);
        return res.redirect('/login');
      }

      console.log("User found:", user._id);

      return bcrypt.compare(password, user.password)
        .then(hasMatch => {
          console.log("Password match:", hasMatch);

          if (!hasMatch) {
            console.log("Incorrect password");
            return res.redirect('/login');
          }

          console.log("Password verified");
          console.log("Creating session...");

          req.session.isLoggedIn = true;
          req.session.user = {
            _id: user._id,
            email: user.email
          };

          req.session.save(err => {
            if (err) {
              console.log("Session save error:", err);
              console.log("=== LOGIN FAILED ===");
              return res.redirect('/login');
            }

            console.log("Session saved successfully");
            console.log("User logged in:", user.email);
            console.log("=== LOGIN SUCCESS ===");

            return res.redirect('/');
          });
        });
    })
    .catch(err => {
      console.log("Login error:", err);
      console.log("=== LOGIN FAILED ===");
      return res.redirect('/login');
    });
};


exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    email: email
  }).then(userDoc => {
    if (userDoc) {
      return res.redirect('/auth/login'); //i.e user already exists
    }
    return bcrypt.hash(password, 12)
  .then(hashedPassword => {
     const user = new User({
      email: email,
      password: hashedPassword,
      cart: { items: [] }
    })
    return user.save();
  })
  .then(result => {
    res.redirect('/login');
  })
  .catch(err => {
    console.log(err);
  })
})
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
