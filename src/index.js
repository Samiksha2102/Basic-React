import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import { booksdata } from "./miniproject/booksdata"; // named export
import Book from "./miniproject/Book"; // default export

function BookList() {
  return (
    <section className="booklist">
      {booksdata.map((book) => {
        //console.log(book);
        //return <Book key={book.id} book={book}></Book>;   //book obj passed in book prop

        //spread operator
        return <Book key={book.id} {...book}></Book>; //book spreaded as props
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
