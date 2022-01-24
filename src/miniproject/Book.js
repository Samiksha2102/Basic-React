import React from "react";
const Book = ({ img, title, author }) => {
  //console.log(props);
  //const { img, title, author } = props.book;

  //to have event we need - attribute & eventhandler

  // we can access event object in all eventhandlers like we did in onClick
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <h5>{author}</h5>

      <button type="button" onClick={clickHandler}>
        example
      </button>
      <br></br>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
