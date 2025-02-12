const axios = require('axios');

const topBooks = () => {
  // https://books-backend.p.goit.global/books/top-books

  return new Promise((resolve, reject) => {
    axios
      .get('https://books-backend.p.goit.global/books/top-books')
      .then(response => {
        resolve({
          data: response.data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          config: response.config,
          request: response.request,
          response: response,
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = {
  topBooks,
};
