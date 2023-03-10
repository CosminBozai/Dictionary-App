import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";
import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { Word } from "../../interface/Word";
import "./Search.scss";

type Props = {
  setSearchedWordData: React.Dispatch<React.SetStateAction<null | Word>>;
};

function Search({ setSearchedWordData }: Props) {
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const searchbarEl = useRef<HTMLInputElement>(null);

  const getWordData = async () => {
    setIsEmptySearch(false);

    const word = searchbarEl.current?.value;
    if (word == "") {
      return setIsEmptySearch(true);
    }
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setSearchedWordData(res.data[0]);
    } catch (err) {
      const error = err as AxiosError;
      // setting word: null means that the Dictionary component knows that the search came empty...
      // ... rather than no search have been made at all
      if (error.code === "ERR_BAD_REQUEST") setSearchedWordData({ word: null });
    }
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="Search for a word"
          className={`search ${isEmptySearch ? "error" : ""}`}
          ref={searchbarEl}
        />
        <SearchIcon
          className="search-icon"
          data-testid="search-btn"
          onClick={getWordData}
        />
      </div>
      <div className="error-msg">
        {isEmptySearch ? "Whoops, can't be empty..." : ""}
      </div>
    </>
  );
}

export default Search;
