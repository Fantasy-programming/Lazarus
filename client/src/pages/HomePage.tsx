import PopularBooks from "@/components/molecules/PopularBooks";
import BookContainer from "@/components/molecules/BookContainer";
import Search from "@components/molecules/Search";

const HomePage = () => {
  return (
    <>
      <Search />
      <BookContainer />
      <PopularBooks />
    </>
  );
};

export default HomePage;
