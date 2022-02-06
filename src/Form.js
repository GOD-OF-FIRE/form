import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Feedback: "",
    };
  }

  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  FeedbackChange = (event) => {
    this.setState({
      Feedback: event.target.value,
    });
  };

  Submit = (event) => {
    document.write(
      `Email id ${this.state.email} has written ${this.state.Feedback} in Feedback  `
    );
  };

  render() {
    return (
      <div className="body">
        <form>
          <hr />
          <div>
            <h2>Email</h2>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.emailChange}
            />
          </div>
          <div>
            <h2>Feedback</h2>
            <input
              placeholder="Enter Your Feedback"
              value={this.state.Feedback}
              onChange={this.FeedbackChange}
            ></input>
          </div>
          <hr />
          <button type="submit" onClick={this.Submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
