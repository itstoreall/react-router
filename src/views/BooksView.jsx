import React, { Component } from "react";
import Axios from "axios";

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:2223/books");
    console.log(response.data);

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Books</h1>
        <ul>
          {this.state.books.map(books => (
            <li key={books.id}>{books.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
