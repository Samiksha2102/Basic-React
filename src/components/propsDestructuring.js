// props destructing and adding children

import React from "react";
import ReactDom from "react-dom";

//setup array(obj)
const firstBook = {
  img: "http://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg?w=640",
  title: "The Fault in our Stars",
  author: "John Green",
};

const secondBook = {
  img: "https://media.loot.co.za/static/gallery/previews/j/z/w/jzwx-634-g820/preview.jzwx-634-g820.0.photo.0722532938.jpg?t=max",
  title: "The Alchemist",
  author: "Paulo Coelho",
};

// simple list n way to render it

// const names = ["samiksha", "divya"];
// const newName = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newName);

// function BookList() {
//   return <section className="booklist">{newName}</section>;
// }

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          consectetur ipsam expedita obcaecati enim eius aperiam, accusamus
          impedit atque fugiat dolores asperiores repudiandae ipsa, explicabo
          quisquam soluta, ab placeat suscipit!
        </p>
      </Book>
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  //destructuring props both are same
  //const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h3>{title}</h3>
      <h5>{author}</h5>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
