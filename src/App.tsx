import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Dictionary from "./components/Dictionary/Dictionary";
import { Word } from "./interface/Word";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sans-serif");
  const [definition, setDefinition] = useState<null | Word>(null);

  useEffect(() => {
    console.log(definition);
  }, [definition]);
  return (
    <div className={`App ${theme} ${font}`}>
      <div className="main-container">
        <Header setTheme={setTheme} setFont={setFont} font={font} />
        <Search setDefinition={setDefinition} />
        <Dictionary definition={definition} />
      </div>
    </div>
  );
}

export default App;
