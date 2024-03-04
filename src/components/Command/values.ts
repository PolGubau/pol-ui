// The scores are arranged so that a continuous match of characters will
// result in a total score of 1.
//
// The best case, this character is a match, and either this is the start

import { commandScore } from './command-score'
import type { CommandProps } from './types'

// of the string, or the previous character was also a match.
export const SCORE_CONTINUE_MATCH = 1,
  // A new match at the start of a word scores better than a new match
  // elsewhere as it's more likely that the user will type the starts
  // of fragments.
  // NOTE: We score word jumps between spaces slightly higher than slashes, brackets
  // hyphens, etc.
  SCORE_SPACE_WORD_JUMP = 0.9,
  SCORE_NON_SPACE_WORD_JUMP = 0.8,
  // Any other match isn't ideal, but we include it for completeness.
  SCORE_CHARACTER_JUMP = 0.17,
  // If the user transposed two letters, it should be significantly penalized.
  //
  // i.e. "ouch" is more likely than "curtain" when "uc" is typed.
  SCORE_TRANSPOSITION = 0.1,
  // The goodness of a match should decay slightly with each missing
  // character.
  //
  // i.e. "bad" is more likely than "bard" when "bd" is typed.
  //
  // This will not change the order of suggestions based on SCORE_* until
  // 100 characters are inserted between matches.
  PENALTY_SKIPPED = 0.999,
  // The goodness of an exact-case match should be higher than a
  // case-insensitive match by a small amount.
  //
  // i.e. "HTML" is more likely than "haml" when "HM" is typed.
  //
  // This will not change the order of suggestions based on SCORE_* until
  // 1000 characters are inserted between matches.
  PENALTY_CASE_MISMATCH = 0.9999,
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
  PENALTY_NOT_COMPLETE = 0.99

export const IS_GAP_REGEXP = /[\\/_+.#"@[{&]/,
  COUNT_GAPS_REGEXP = /[\\/_+.#"@[{&]/g,
  IS_SPACE_REGEXP = /[\s-]/

export const COUNT_SPACE_REGEXP: RegExp = /[\s-]/g

export const GROUP_SELECTOR = `[cmdk-group=""]`
export const GROUP_ITEMS_SELECTOR = `[cmdk-group-items=""]`
export const GROUP_HEADING_SELECTOR = `[cmdk-group-heading=""]`
export const ITEM_SELECTOR = `[cmdk-item=""]`
export const VALID_ITEM_SELECTOR = `${ITEM_SELECTOR}:not([aria-disabled="true"])`
export const SELECT_EVENT = `cmdk-item-select`
export const VALUE_ATTR = `data-value`
export const defaultFilter: CommandProps['filter'] = (value, search, keywords = []) =>
  commandScore(value, search, keywords)
