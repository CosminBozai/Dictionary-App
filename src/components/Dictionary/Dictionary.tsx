import { ReactComponent as Play } from "../../assets/images/icon-play.svg";
import { Word } from "../../interface/Word";
import Meaning from "../Meaning/Meaning";
import { v4 as uuidv4 } from "uuid";

import "./Dictionary.scss";

type Definition = {
  definition: null | Word;
};

function Dictionary({ definition }: Definition) {
  if (definition == null) {
    return <div></div>;
  } else if (definition.word == null) {
    return (
      <div className="nodef-container">
        <div className="emoji">😔</div>
        <h1>No Definitions Found</h1>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  } else if (definition.meanings != null) {
    const meanings = definition.meanings.map((def) => (
      <Meaning
        key={uuidv4()}
        definitions={def.definitions}
        partOfSpeech={def.partOfSpeech}
      />
    ));

    return (
      <>
        <section className="dictionary-header">
          <div>
            <h1 className="word">{definition.word}</h1>
            <p className="phonetic">{definition.phonetic}</p>
          </div>
          <Play className="play-btn" />
        </section>
        {meanings}
      </>
    );
  }
}

export default Dictionary;
