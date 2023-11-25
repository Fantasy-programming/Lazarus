import { forwardRef } from "react";

import Style from "./index.module.css";
import SearchIcon from "@assets/search.svg?react";

const SearchBox = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className={Style.container}>
      <div>
        <SearchIcon />
      </div>
      <input placeholder="Search for books" name="global-search" ref={ref} {...props} />
    </div>
  );
});

SearchBox.displayName = "SearchBox";

export default SearchBox;
