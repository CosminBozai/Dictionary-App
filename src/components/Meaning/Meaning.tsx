import { Meaning, Word } from "../../interface/Word";
import { v4 as uuidv4 } from "uuid";
import "./Meaning.scss";

function Meaning({ definitions, partOfSpeech }: Meaning) {
  const definitionList = definitions.map((def) => (
    <li key={uuidv4()}>{def.definition}</li>
  ));
  return (
    <div className="meaning-container">
      <div className="part-of-speech">{partOfSpeech}</div>
      <div className="meaning-text">Meaning</div>
      <ul className="definition-list">{definitionList}</ul>
    </div>
  );
}

export default Meaning;
