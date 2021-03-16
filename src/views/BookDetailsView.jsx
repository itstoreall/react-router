import axios from "axios";
import React, { Component } from "react";
import { routes } from "../routes";

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

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.books);
  };

  handleImg = () => {
    setTimeout((imgUrl, title) => <img src={imgUrl} alt={title} />, 1000);
  };

  render() {
    const { imgUrl, title, descr, author } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          &#60; back
        </button>
        <h1>Book Details View - {this.props.match.params.bookId}</h1>
        {<img src={imgUrl} alt={title} />}
        <h2>{title}</h2>
        {author && <p>Авторы: {author.name}</p>}
        <p>{descr}</p>
      </div>
    );
  }
}
