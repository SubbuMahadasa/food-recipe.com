import React from "react";

export default function Details(props) {
  return (
    <div>
      <h3>{props.Data.name}</h3>
      <h3>{props.Data.Rollno}</h3>
      <h3>{props.Data.clz}</h3>
    </div>
  );
}
