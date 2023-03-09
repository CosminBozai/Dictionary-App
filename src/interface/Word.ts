interface Definition {
  antonyms?: string[];
  definition: string;
  synonyms?: string[];
}

interface Meaning {
  antonyms?: string[];
  definitions: Definition[];
  partOfSpeech: "noun";
  synonyms?: string[];
}

interface Word {
  license?: object;
  meanings?: Meaning[];
  phonetic?: string;
  phonetics?: object[];
  sourceUrls?: string[];
  word: string | null;
}

export type { Word, Meaning };
