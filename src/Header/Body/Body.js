import React, { Component } from "react";
import Details from "./Details";
export class Body extends Component {
  render() {
    return (
      <div>
        <Details
          Data={{ name: "sandeep", Rollno: "166q1a0533", clz: "kiet" }}
        />
        <Details Data={{ name: "Raja", Rollno: "166q1a0534", clz: "kiet" }} />
        <Details Data={{ name: "sagar", Rollno: "166q1a0563", clz: "kiet" }} />
      </div>
    );
  }
}

export default Body;
