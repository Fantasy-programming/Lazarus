import PopularBooks from "@/components/molecules/PopularBooks";
import BookContainer from "@/components/molecules/BookContainer";
import Search from "@components/molecules/Search";
import PageTemplate from "@components/templates/PageTemplate";

function HomePage() {
  return (
    <>
      <PageTemplate>
        <Search />
        <BookContainer />
        <PopularBooks />
        <div>
          icons
          <div>
            <h3></h3>
            <p></p>
            <a href=""></a>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export default HomePage;
