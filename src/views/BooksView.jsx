import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:2223/books");
    console.log(response.data);

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Books</h1>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to={`${this.props.match.url}/${book.id}`}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
