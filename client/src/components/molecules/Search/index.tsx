import SearchBox from "@components/atoms/SearchBox";
import { Button } from "@components/atoms/Button";
import { RoundBtn } from "@components/atoms/Button";

import Style from "./index.module.css";

function Search() {
  return (
    <div className={Style.search}>
      <SearchBox />
      <Button text="search" />
      <RoundBtn />
    </div>
  );
}

export default Search;
