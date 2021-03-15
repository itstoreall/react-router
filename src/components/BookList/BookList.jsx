import React from "react";
import { Link, withRouter } from "react-router-dom";

const BookList = ({ books, match }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {/* <Link to={`${match.url}/${book.id}`}>{book.title}</Link> */}
          {book.title}
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList);
