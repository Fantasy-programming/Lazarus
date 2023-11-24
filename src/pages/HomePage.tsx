import Book, { SmallBook } from "@/components/atoms/Book";
import Search from "@components/molecules/Search";
import PageTemplate from "@components/templates/PageTemplate";

const style = {
  display: "flex",
  gap: "20px",
  padding: "0px 20px",
  justifyContent: "space-between",
};

function HomePage() {
  return (
    <>
      <PageTemplate>
        <Search />
        <div style={style}>
          <SmallBook title="All" color="grey" />
          <SmallBook title="eBooks" color="green" />
          <SmallBook title="New" color="red" />
          <SmallBook title="Bestsellers" color="blue" />
          <SmallBook title="audiobooks" color="purple" />
          <SmallBook title="Fiction" color="purple" />
          <SmallBook title="Romance" color="red" />
          <SmallBook title="Fantasy" color="blue" />
          <SmallBook title="mango" color="green" />
          <SmallBook title="Crime" color="purple" />
        </div>
        <div>
          <h3>popular</h3>
          <div style={style}>
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
            <Book
              color="hsl(46, 93%, 95%)"
              author="Paul Murray"
              title="The bee sting"
              cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674502938i/62039166.jpg"
            />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default HomePage;
