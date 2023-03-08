import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow-down.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";
import React, { useState } from "react";
import formatString from "../../utils/formatString";
import "./Header.scss";
import "./Switch.scss";

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setFont: React.Dispatch<React.SetStateAction<string>>;
  font: string;
};

function Header({ setTheme, setFont, font }: Props) {
  const [showOptions, setShowOptions] = useState(false);

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked === false ? setTheme("light") : setTheme("dark");
  };

  const changeFont = (font: string) => {
    setFont(font);
    setShowOptions(false);
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
            <span>{formatString(font)}</span>
            <Arrow />
          </button>
          <div className={`options ${showOptions ? "show" : ""}`}>
            <a href="#" onClick={() => changeFont("sans-serif")}>
              Sans Serif
            </a>
            <a href="#" onClick={() => changeFont("serif")}>
              Serif
            </a>
            <a href="#" onClick={() => changeFont("mono")}>
              Mono
            </a>
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
