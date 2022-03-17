/*
 * Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
 */
const longestWord = (text) => {
  const s = text.split(/[^a-zA-Z]/);
  return s.reduce((a, c) => (a.length > b.length ? a : b), "");
};
