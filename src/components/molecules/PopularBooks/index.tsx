import Book from "@/components/atoms/Book";
import Style from "./index.module.css";
import LeftIcon from "@/assets/left.svg?react";
import RightIcon from "@/assets/right.svg?react";

function PopularBooks() {
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
        <Book
          title="Fairy Tale"
          author="Stephen King"
          color="hsl(210, 97%, 25%)"
          cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg"
        />
        <Book
          title="Never After"
          author="Stephani gueber"
          color="hsl(253, 33%, 36%)"
          cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645642179i/59808071.jpg"
        />
        <Book
          title="Klara and the Sun"
          author="Kazuo Ishiguro"
          color="hsl(2, 100%, 65%)"
          cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603206535i/54120408.jpg"
        />
        <Book
          title="Mist and Fury"
          author="Sarah J. Maas"
          color="hsl(173, 99%, 34%)"
          cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg"
        />
        <Book
          title="hamnet"
          author="Maggie O'Farrell            "
          color="hsl(213, 74%, 27%)"
          cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574943819i/43890641.jpg"
        />
        <Book
          title="wellness"
          author="nathan hill"
          color="hsl(179, 100%, 34%)"
          cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1695742140i/65650229.jpg"
        />
      </div>
    </div>
  );
}

export default PopularBooks;
