import React, { Component } from "react";
import axios from "axios";
import API from "../config/api.js";

class PersonsDelete extends Component {
  state = { id: "" };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    const { id } = this.state;
    event.preventDefault();

    const userID = id;

    API.delete(`users/${userID}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default PersonsDelete;
