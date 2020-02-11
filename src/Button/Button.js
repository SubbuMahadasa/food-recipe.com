import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "How are you?"
    };
  }
  Exchange() {
    this.setState({
      message: "Im fine!"
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={() => this.Exchange()}>Click</button>
      </div>
    );
  }
}

export default Button;
