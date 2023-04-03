import { useState } from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

const MockApp = () => {
  const [colorTheme, setColorTheme] = useState("light");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  return (
    <Header
      setColorTheme={setColorTheme}
      fontFamily={fontFamily}
      setFontFamily={setFontFamily}
    />
  );
};

const user = userEvent.setup();

describe("The menu button works", () => {
  // This test is not optimal as it tests for the options container class that gives it visibility
  // Instead, the test should test that the particular options appear on the screen
  // However this is not possible as JSDOM doesn't support loading stylesheets, so it cannot check for the property display: none
  // As a result, the test always pass
  // https://github.com/testing-library/jest-dom/issues/116
  it("Select menu opens when clicking the button", async () => {
    render(<MockApp />);
    const selectBtn = screen.getByRole("button");
    await user.click(selectBtn);
    const optionsMenu = screen.getByTestId("select-menu");
    expect(optionsMenu).toHaveClass("show");
  });

  it("Select menu closes when clicked again", async () => {
    render(<MockApp />);
    const selectBtn = screen.getByRole("button");
    await user.click(selectBtn);
    await user.click(selectBtn);
    const optionsMenu = screen.getByTestId("select-menu");
    expect(optionsMenu).not.toHaveClass("show");
  });
});

describe("Clicking a theme option closes the select menu", () => {
  it("Sans Serif option", async () => {
    render(<MockApp />);
    const selectBtn = screen.getByRole("button");
    const optionsMenu = screen.getByTestId("select-menu");
    await user.click(selectBtn);
    await user.click(screen.getByRole("link", { name: "Sans Serif" }));
    expect(optionsMenu).not.toHaveClass("show");
  });

  it("Serif option", async () => {
    render(<MockApp />);
    const selectBtn = screen.getByRole("button");
    const optionsMenu = screen.getByTestId("select-menu");
    await user.click(selectBtn);
    await user.click(screen.getByRole("link", { name: "Serif" }));
    expect(optionsMenu).not.toHaveClass("show");
  });

  it("Mono option", async () => {
    render(<MockApp />);
    const selectBtn = screen.getByRole("button");
    const optionsMenu = screen.getByTestId("select-menu");
    await user.click(selectBtn);
    await user.click(screen.getByRole("link", { name: "Mono" }));
    expect(optionsMenu).not.toHaveClass("show");
  });
});
