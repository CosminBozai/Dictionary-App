import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Search from "./components/Search/Search";

function App() {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sans-serif");
  const [definiton, setDefinition] = useState<object | null>({});
  return (
    <div className={`App ${theme} ${font}`}>
      <div className="main-container">
        <Header setTheme={setTheme} setFont={setFont} font={font} />
        <Search setDefinition={setDefinition} />
        {/* Dictionary  */}
      </div>
    </div>
  );
}

export default App;
