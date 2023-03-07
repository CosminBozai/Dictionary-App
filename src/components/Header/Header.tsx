import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow-down.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";
import React, { useState } from "react";
import "./Header.scss";
import "./Switch.scss";

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ setTheme }: Props) {
  const [showOptions, setShowOptions] = useState(false);

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked === false ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="header">
      <Logo className="logo" />
      <div className="header-right">
        <div className="select">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="select-btn"
          >
            <span> Sans Serif</span>
            <Arrow />
          </button>
          <div className={`options ${showOptions ? "show" : ""}`}>
            <a href="#">Sans Serif</a>
            <a href="#">Serif</a>
            <a href="#">Mono</a>
          </div>
        </div>

        <div className="separator"></div>
        <label className="switch">
          <input type="checkbox" onChange={changeTheme} />
          <span className="slider round"></span>
        </label>
        <Moon className="moon" />
      </div>
    </header>
  );
}

export default Header;
