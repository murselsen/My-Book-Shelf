const axios = require('axios');

const topBooks = async () => {
  // https://books-backend.p.goit.global/books/top-books
  const response = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );
    return response.data;
    

    return new Promise((resolve, reject) => {
        
    });
};

module.exports = {
  topBooks,
};
