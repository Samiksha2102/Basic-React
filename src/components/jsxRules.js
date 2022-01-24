import React from "react";
import ReactDom from "react-dom";

//JSX Rules
//returns single element
//single element can be - div,section,article or fragment
//use camelCase for html attribute
//use className instead of class
//close every element
//formatting

function Greeting() {
  return (
    <div onClick={} className="">
      <h3>jsx rules page</h3>
      <ul>
        <li>
          <a href="#">hello</a>
        </li>
      </ul>
    </div>
    //<div></div> not allowed as returns single element
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
