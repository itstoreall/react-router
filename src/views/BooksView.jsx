import React, { Component } from "react";
import axios from "axios";
import BookList from "../components/BookList";

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
        <BookList books={this.state.books} />
      </>
    );
  }
}

export default BooksView;
