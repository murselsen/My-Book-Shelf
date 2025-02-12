const express = require('express');
const router = express.Router();

const { topBooks } = require('../controllers/books');
router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;
