import React, { Component } from "react";

export class Ifelse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsLoggedIn: false
    };
  }

  render() {
    let message;
    if (this.state.IsLoggedIn) {
      message = <p>Welcome sandeep</p>;
    } else {
      message = <p>please login</p>;
    }

    return <div>{message}</div>;
  }
}

export default Ifelse;
