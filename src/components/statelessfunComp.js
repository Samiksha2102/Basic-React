import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX
function Greeting() {
  return (
    <div>
      <h4>This is my first component</h4>
    </div>
  );
}

// arrow function
const Greeting = () => {
  return React.createElement("h1", {}, "hello world");
};

// complex function structure
// so prefer to use stateless function comp

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "helloo world")
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
