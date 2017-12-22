const express = require('express');
const router = express.Router();
const Students = require('../models/students');
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/chat');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  Students.register(new Students({ username : req.body.username }), req.body.password, (err, student) => {
    if (err) {
      return next(err)
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/chat');
    });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/user/login');
});

module.exports = router