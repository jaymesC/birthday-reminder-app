import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
// import Pic from "./download.jpg";
import "./index.css";

// Setup variables
// const books = [
//   {
//   img: `${Pic}`,
//   author: "Amazon Team",
//   title: "Amazon Founders for books",
// },
// {
//   img: `${Pic}`,
//   author: "Google founder",
//   title: "Amazon Founders for books",
// }]

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map(book => {
//         return <Book key={book.author} {...book}/>;
//       })}
     

//     </section>
//   );
// }

// const Book = ({ img, title, author }) => {

//   const clickHandler = () => {
//     books.filter(() => books.img === books.author).remove()
//   }

//   return (
//     <article className="book">
//       <img
//         src={img}
//         alt=""
//         style={{ border: "1px solid black", borderRadius: "9px" }}
//       />
//       <h4>{title}</h4>
//       <h5>{author}</h5>
//       <button type='button' onClick={() => clickHandler(author)}>Reference example</button>
//     </article>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById("root")
);
