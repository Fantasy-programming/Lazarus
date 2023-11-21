import SearchBox from "@components/atoms/SearchBox";
import SearchBtn from "@components/atoms/SearchBtn";
import CartBtn from "@components/atoms/CartBtn";

import Style from "./index.module.css";

function Search() {
  return (
    <div className={Style.search}>
      <SearchBox />
      <SearchBtn />
      <CartBtn />
    </div>
  );
}

export default Search;
