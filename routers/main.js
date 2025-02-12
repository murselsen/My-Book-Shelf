const express = require('express');
const router = express.Router();

const { topBooks } = require('../controllers/books');
router.get('/home', async (req, res) => {
  const books = await topBooks();
  console.log(books.data);
  res.render('home');
});

module.exports = router;
