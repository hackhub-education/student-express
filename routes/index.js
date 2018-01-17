const express = require('express');
const router = express.Router();
const Students = require('../models/students');

router.get('/', (req, res) => {
  Students.find({}, (err, students) => {
    res.render('index', { title: 'Welcome to Full-stack !', name: 'Michael', students })
  });
});

router.get('/react', (req, res) => {
  res.render('react');
});

module.exports = router;