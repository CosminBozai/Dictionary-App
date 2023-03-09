import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";
import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import "./Search.scss";
import { Word } from "../../interface/Word";

type Definiton = {
  setDefinition: React.Dispatch<React.SetStateAction<null | Word>>;
};

function Search({ setDefinition }: Definiton) {
  const [empty, setEmpty] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const getDefinition = async () => {
    setEmpty(false);

    const word = inputEl.current?.value;
    if (word == "") {
      setEmpty(true);
      return;
    }
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinition(res.data[0]);
    } catch (err) {
      const error = err as AxiosError;
      if (error.code === "ERR_BAD_REQUEST") setDefinition({ word: null });
    }
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="Search for a word"
          className={`search ${empty ? "error" : ""}`}
          ref={inputEl}
        />
        <SearchIcon
          className="search-icon"
          data-testid="search-btn"
          onClick={getDefinition}
        />
      </div>
      <div className="error-msg">
        {empty ? "Whoops, can't be empty..." : ""}
      </div>
    </>
  );
}

export default Search;
