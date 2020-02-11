import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      topic: "angular"
    };
  }
  Handle = event => {
    this.setState({
      userName: event.target.value
    });
  };

  HandleComment = event => {
    this.setState({
      comment: event.target.value
    });
  };
  HandlerTopic = event => {
    this.setState({
      topic: event.target.value
    });
  };
  HandleSubmit = event => {
    console.log(`${this.state.userName} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        <div>
          <label>UserName : </label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.Handle}
          />
          <h4>{this.state.userName}</h4>

          <label>Comments :</label>
          <textarea
            type="text"
            value={this.state.comment}
            onChange={this.HandleComment}
          ></textarea>
          <label>Select :</label>
          <select value={this.state.topic} onChange={this.HandlerTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
