import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`App ${theme} serif`}>
      <div className="main-container">
        <Header setTheme={setTheme} />
        {/* Search  */}
        {/* Dictionary  */}
      </div>
    </div>
  );
}

export default App;
