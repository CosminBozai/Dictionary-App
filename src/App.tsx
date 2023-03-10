import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Dictionary from "./components/Dictionary/Dictionary";
import { Word } from "./interface/Word";
import "./App.scss";

function App() {
  const [colorTheme, setColorTheme] = useState("light");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [searchedWordData, setSearchedWordData] = useState<null | Word>(null);

  return (
    <div className={`App ${colorTheme} ${fontFamily}`}>
      <div className="main-container">
        <Header
          setColorTheme={setColorTheme}
          setFontFamily={setFontFamily}
          fontFamily={fontFamily}
        />
        <Search setSearchedWordData={setSearchedWordData} />
        <Dictionary searchedWordData={searchedWordData} />
      </div>
    </div>
  );
}

export default App;
