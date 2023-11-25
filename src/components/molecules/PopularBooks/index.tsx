import { useEffect, useState } from "react";
import bookService from "@/services/bookService";

import Book from "@/components/atoms/Book";
import Style from "./index.module.css";
import LeftIcon from "@/assets/left.svg?react";
import RightIcon from "@/assets/right.svg?react";

function PopularBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((response) => {
      setBooks(response);
    });
  }, []);

  return (
    <div>
      <div className={Style.header}>
        <h3>popular</h3>
        <div className={Style.buttonlist}>
          <a className={Style.viewAll}>View All</a>
          <button className={Style.move}>
            <LeftIcon fill="hsl(32, 30%, 83%)" />
          </button>
          <button className={Style.move}>
            <RightIcon fill="hsl(32, 30%, 83%)" />
          </button>
        </div>
      </div>

      <div className={Style.container}>
        {books.map((book) => {
          return <Book key={book.id} title={book.title} author={book.author} color={book.color} cover={book.cover} />;
        })}
      </div>
    </div>
  );
}

export default PopularBooks;
