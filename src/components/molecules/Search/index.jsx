import SearchBox from "@components/atoms/SearchBox";
import Button from "@components/atoms/Button";
import CartBtn from "@components/atoms/CartBtn";

import Style from "./index.module.css";

function Search() {
  return (
    <div className={Style.search}>
      <SearchBox />
      <Button />
      <CartBtn />
    </div>
  );
}

export default Search;
