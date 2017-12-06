const express = require('express');
const router = express.Router();
const Students = require('../models/students');

router.get('/add', (req, res, next) => {
  res.render('add');
})

router.post('/add', (req, res, next) => {
  const student = new Students(req.body)
  student.save((err, doc)=>{
    if (err){
      res.send(err)
    }
    else{
      res.redirect('/')
    }
  })
})

module.exports = router;