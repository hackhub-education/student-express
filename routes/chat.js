const express = require('express');
const router = express.Router();
const Chats = require('../models/chats');

router.get('/', (req, res, next) => {
  Chats.find({}, {}, { sort: { createdAt: 1 } }, (err, messages) => {
    if(err) {
      next(err)
    } else {
      res.render('chat', { messages })
    }
  })
});

module.exports = router