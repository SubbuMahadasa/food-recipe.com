import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: " Daddy!"
    };
    this.Greet = this.Greet.bind(this);
  }

  Greet() {
    alert("HELLO" + this.state.parentName);
  }
  render() {
    return (
      <div>
        <Child />
      </div>
    );
  }
}

export default Parent;
