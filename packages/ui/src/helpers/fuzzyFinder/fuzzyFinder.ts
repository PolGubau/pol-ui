// The scores are arranged so that a continuous match of characters will
// result in a total score of 1.
//
// The best case, this character is a match, and either this is the start
// of the string, or the previous character was also a match.
const MATCH_CONTINUOUS = 1;
// A new match at the start of a word scores better than a new match
// elsewhere as it's more likely that the user will type the starts
// of fragments.
// NOTE: We score word jumps between spaces slightly higher than slashes, brackets
// hyphens, etc.
const MATCH_NEW_WORD_SPACE = 0.9;
const MATCH_NEW_WORD_NON_SPACE = 0.8;
// Any other match isn't ideal, but we include it for completeness.
const MATCH_CHARACTER_JUMP = 0.17;
// If the user transposed two letters, it should be significantly penalized.
//
// i.e. "ouch" is more likely than "curtain" when "uc" is typed.
const PENALTY_TRANSPOSITION = 0.1;
// The goodness of a match should decay slightly with each missing
// character.
//
// i.e. "bad" is more likely than "bard" when "bd" is typed.
//
// This will not change the order of suggestions based on SCORE_* until
// 100 characters are inserted between matches.
const PENALTY_SKIPPED_CHAR = 0.999;
// The goodness of an exact-case match should be higher than a
// case-insensitive match by a small amount.
//
// i.e. "HTML" is more likely than "haml" when "HM" is typed.
//
// This will not change the order of suggestions based on SCORE_* until
// 1000 characters are inserted between matches.
const PENALTY_CASE_DIFFERENCE = 0.9999;
// Match higher for letters closer to the beginning of the word
// If the word has more characters than the user typed, it should
// be penalised slightly.
//
// i.e. "html" is more likely than "html5" if I type "html".
//
// However, it may well be the case that there's a sensible secondary
// ordering (like alphabetical) that it makes sense to rely on when
// there are many prefix matches, so we don't make the penalty increase
// with the number of tokens.
const PENALTY_INCOMPLETE_MATCH = 0.99;

const IS_GAP_REGEXP = /[\\\/_+.#"@\[\(\{&]/;
const IS_SPACE_REGEXP = /[\s-]/;
const COUNT_SPACE_REGEXP = /[\s-]/g;

export function fuzzyFinderInner(
  string: string,
  abbreviation: string,
  lowerString: string,
  lowerAbbreviation: string,
  stringIndex: number,
  abbreviationIndex: number,
  memoizedResults: Record<string, number>,
) {
  if (abbreviationIndex === abbreviation.length) {
    if (stringIndex === string.length) {
      return MATCH_CONTINUOUS;
    }
    return PENALTY_INCOMPLETE_MATCH;
  }

  const memoizeKey = `${stringIndex},${abbreviationIndex}`;
  if (memoizedResults[memoizeKey] !== undefined) {
    return memoizedResults[memoizeKey];
  }

  const abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
  let index = lowerString.indexOf(abbreviationChar, stringIndex);
  let highScore = 0;

  let score: number;
  let transposedScore: number;
  let spaceBreaks: RegExpMatchArray | null;

  while (index >= 0) {
    score = fuzzyFinderInner(
      string,
      abbreviation,
      lowerString,
      lowerAbbreviation,
      index + 1,
      abbreviationIndex + 1,
      memoizedResults,
    );
    if (score > highScore) {
      if (index === stringIndex) {
        score *= MATCH_CONTINUOUS;
      } else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
        score *= MATCH_NEW_WORD_NON_SPACE;
      } else if (IS_SPACE_REGEXP.test(string.charAt(index - 1))) {
        score *= MATCH_NEW_WORD_SPACE;
        spaceBreaks = string.slice(stringIndex, index - 1).match(COUNT_SPACE_REGEXP);

        if (spaceBreaks && stringIndex > 0) {
          score *= PENALTY_SKIPPED_CHAR ** spaceBreaks.length;
        }
      } else {
        score *= MATCH_CHARACTER_JUMP;
        if (stringIndex > 0) {
          score *= PENALTY_SKIPPED_CHAR ** (index - stringIndex);
        }
      }

      if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) {
        score *= PENALTY_CASE_DIFFERENCE;
      }
    }

    if (
      (score < PENALTY_TRANSPOSITION &&
        lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1)) ||
      (lowerAbbreviation.charAt(abbreviationIndex + 1) === lowerAbbreviation.charAt(abbreviationIndex) && // allow duplicate letters. Ref #7428
        lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex))
    ) {
      transposedScore = fuzzyFinderInner(
        string,
        abbreviation,
        lowerString,
        lowerAbbreviation,
        index + 1,
        abbreviationIndex + 2,
        memoizedResults,
      );

      if (transposedScore * PENALTY_TRANSPOSITION > score) {
        score = transposedScore * PENALTY_TRANSPOSITION;
      }
    }

    if (score > highScore) {
      highScore = score;
    }

    index = lowerString.indexOf(abbreviationChar, index + 1);
  }

  memoizedResults[memoizeKey] = highScore;
  return highScore;
}

function formatInput(string: string) {
  return string.toLowerCase().replace(COUNT_SPACE_REGEXP, " "); // convert all valid space characters to space so they match each other
}

export function fuzzyFinder(string: string, abbreviation: string, aliases: string[]): number {
  const s = aliases && aliases.length > 0 ? `${`${string} ${aliases.join(" ")}`}` : string;
  return fuzzyFinderInner(s, abbreviation, formatInput(string), formatInput(abbreviation), 0, 0, {});
}
