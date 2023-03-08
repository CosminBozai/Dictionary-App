import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sans-serif");
  return (
    <div className={`App ${theme} ${font}`}>
      <div className="main-container">
        <Header setTheme={setTheme} setFont={setFont} font={font} />
        {/* Search  */}
        {/* Dictionary  */}
      </div>
    </div>
  );
}

export default App;
