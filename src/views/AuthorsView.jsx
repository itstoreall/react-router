import React, { Component } from "react";
import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import AuthorBooks from "../components/AuthorBooks";

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:2223/authors?_embed=books",
    );
    this.setState({ authors: response.data });
  }

  render() {
    const { url, path } = this.props.match;

    return (
      <>
        <h1>Authors</h1>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
        <Route
          path={`${path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            if (author) {
              console.log(author.books);
            }

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
