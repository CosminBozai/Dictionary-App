import { ReactComponent as Play } from "../../assets/images/icon-play.svg";
import { Word } from "../../interface/Word";
import Meaning from "../Meaning/Meaning";
import { v4 as uuidv4 } from "uuid";

import "./Dictionary.scss";
import { useEffect, useState } from "react";

type Props = {
  searchedWordData: null | Word;
};

function Dictionary({ searchedWordData }: Props) {
  const [audioLink, setAudioLink] = useState("");
  const [prononciation, setPrononciation] = useState("");

  useEffect(() => {
    searchedWordData?.phonetics?.forEach((element) => {
      if (element.audio !== "") {
        return setAudioLink(element.audio);
      } else {
        setAudioLink("");
      }
    });

    searchedWordData?.phonetics?.forEach((element) => {
      if (element.text !== "") return setPrononciation(element.text);
    });
  }, [searchedWordData?.phonetics]);

  const playAudio = () => {
    const audio = new Audio(audioLink);
    audio.play();
  };

  if (searchedWordData == null) {
    return <div></div>;
  } else if (searchedWordData.word == null) {
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
  } else if (searchedWordData.meanings != null) {
    const meanings = searchedWordData.meanings.map((meaning) => (
      <Meaning
        key={uuidv4()}
        definitions={meaning.definitions}
        partOfSpeech={meaning.partOfSpeech}
      />
    ));

    return (
      <>
        <section className="dictionary-header">
          <div>
            <h1 className="word">{searchedWordData.word}</h1>
            <p className="phonetic">{prononciation}</p>
          </div>
          <Play className="play-btn" onClick={playAudio} />
        </section>
        {meanings}
      </>
    );
  } else {
    // Without adding this vs code complains
    return <></>;
  }
}

export default Dictionary;
