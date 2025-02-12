const axios = require('axios');

const topBooks = () => {
  // https://books-backend.p.goit.global/books/top-books
  axios
    .get('https://books-backend.p.goit.global/books/top-books')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  topBooks,
};
