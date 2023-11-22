import Style from "./index.module.css";
import { ReactComponent as SearchIcon } from "@assets/search.svg";

type SearchBoxProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = () => {
  return (
    <div className={Style.container}>
      <div>
        <SearchIcon />
      </div>
      <input placeholder="Search for books" name="global-search" />
    </div>
  );
};

export default SearchBox;
