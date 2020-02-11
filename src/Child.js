import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.GreetHandler}>Greet</button>
    </div>
  );
}
export default Child;
