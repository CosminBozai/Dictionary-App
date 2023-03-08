import { useState } from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const MockApp = () => {
  const [definiton, setDefinition] = useState<object | null>({});
  return <Search setDefinition={setDefinition} />;
};

describe("Error handling when user submits an empty field", () => {
  const user = userEvent.setup();
  it("error message appears on the screen", async () => {
    render(<MockApp />);
    const searchBtn = screen.getByTestId("search-btn");
    await user.click(searchBtn);
    const errorMsg = screen.getByText("Whoops, can't be empty...");
    expect(errorMsg).toBeInTheDocument();
  });
  it("error class is applied to the search bar", async () => {
    render(<MockApp />);
    const searchBtn = screen.getByTestId("search-btn");
    const inputEl = screen.getByRole("searchbox");
    await user.click(searchBtn);
    expect(inputEl).toHaveClass("error");
  });
});
