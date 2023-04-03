import Meaning from "./Meaning";
import { render } from "@testing-library/react";

describe("Meaning component", () => {
  const props = {
    partOfSpeech: "noun",
    definitions: [
      {
        definition: "A thing that is complete in itself",
      },
      {
        definition: "A complete individual person or thing",
      },
    ],
  };

  it("renders part of speech and definitions", () => {
    const { getByText } = render(<Meaning {...props} />);
    expect(getByText(props.partOfSpeech)).toBeInTheDocument();
    props.definitions.forEach((definition) => {
      expect(getByText(definition.definition)).toBeInTheDocument();
    });
  });
});
