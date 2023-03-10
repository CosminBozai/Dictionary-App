import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow-down.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";
import React, { useState } from "react";
import formatString from "../../utils/formatString";
import "./Header.scss";
import "./Switch.scss";

type Props = {
  setColorTheme: React.Dispatch<React.SetStateAction<string>>;
  setFontFamily: React.Dispatch<React.SetStateAction<string>>;
  fontFamily: string;
};

function Header({ setColorTheme, setFontFamily, fontFamily }: Props) {
  const [showFontSelectMenu, setShowFontSelectMenu] = useState(false);

  const changeFont = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked === false ? setColorTheme("light") : setColorTheme("dark");
  };

  const changeFontFamily = (fontFamily: string) => {
    setFontFamily(fontFamily);
    setShowFontSelectMenu(false);
  };

  return (
    <header className="header">
      <Logo className="logo" />
      <div className="header-right">
        <div className="font-btn-wrapper">
          <button
            onClick={() => setShowFontSelectMenu(!showFontSelectMenu)}
            className="font-btn"
          >
            <span className="current-font-name">
              {formatString(fontFamily)}
            </span>
            <Arrow />
          </button>
          <div
            className={`font-options-menu ${showFontSelectMenu ? "show" : ""}`}
            data-testid="select-menu"
          >
            <a href="#" onClick={() => changeFontFamily("sans-serif")}>
              Sans Serif
            </a>
            <a href="#" onClick={() => changeFontFamily("serif")}>
              Serif
            </a>
            <a href="#" onClick={() => changeFontFamily("mono")}>
              Mono
            </a>
          </div>
        </div>

        <div className="separating-line"></div>
        <label className="color-theme-switch">
          <input type="checkbox" onChange={changeFont} />
          <span className="slider round"></span>
        </label>
        <Moon className="moon" />
      </div>
    </header>
  );
}

export default Header;
