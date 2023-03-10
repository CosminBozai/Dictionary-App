interface Audio {
  text?: string;
  audio: string;
}

interface Definition {
  antonyms?: string[];
  definition: string;
  synonyms?: string[];
}

interface Meaning {
  antonyms?: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms?: string[];
}

interface Word {
  license?: object;
  meanings?: Meaning[];
  phonetic?: string;
  phonetics?: Audio[];
  sourceUrls?: string[];
  word: string | null;
}

export type { Word, Meaning };
