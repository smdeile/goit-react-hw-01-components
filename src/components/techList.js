import React from 'react';
import PropTypes from 'prop-types';
const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);
export default BookList;
BookList.propTypes = {
  books: PropTypes,
};
