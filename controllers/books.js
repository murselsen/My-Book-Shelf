const axios = require('axios');

const topBooks = async () => {
  // https://books-backend.p.goit.global/books/top-books
  const response = await axios
    .get('https://books-backend.p.goit.global/books/top-books')
    .then(response => {
      console.log(response);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  topBooks,
};
