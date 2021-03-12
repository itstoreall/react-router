import axios from "axios";
import React, { Component } from "react";
// import errorImg from "./error.jpg";

export default class BookDetailsView extends Component {
  static defaultProps = {
    imgUrl: "./error.jpg",
  };

  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: "./error.jpg",
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await axios.get(
      `http://localhost:2223/books/${bookId}?_expand=author`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const { imgUrl, title, descr } = this.state;
    return (
      <>
        <h1>Book Details View - {this.props.match.params.bookId}</h1>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {this.state.author && <p>Авторы: {this.state.author.name}</p>}
        <p>{descr}</p>
      </>
    );
  }
}
