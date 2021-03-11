import React, { Component } from "react";
import Axios from "axios";

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:2223/authors");
    console.log(response.data);

    this.setState({ authors: response.data });
  }

  render() {
    return (
      <>
        <h1>Authors</h1>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default AuthorsView;
