const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/users');

router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', (req, res) => {
  res.send('Okey');
});

// Register
router.get('/register', (req, res) => {
  res.render('register');
  console.log('Users:', getUsers());
});

module.exports = router;
