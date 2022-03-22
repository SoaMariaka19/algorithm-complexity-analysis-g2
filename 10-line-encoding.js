/*
 * Given a string, return its encoding defined as follows:
 * - First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
 *   for example, "aabbbc" is divided into ["aa", "bbb", "c"]
 * - Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating
 *   character
 *   for example, substring "bbb" is replaced by "3b"
 * - Finally, all the new strings are concatenated together in the same order and a new string is returned.
 */

const lineEncoding = (s) => {
  let count = 1;                                               //1
  let ans = "";                                                //1
  for (let i = 0; i < s.length; i++) {                         //5
    if (s[i] === s[i + 1]) {                                   //8
      count++;                                                 //1
    } else {
      if (count > 1) {                                         //3
        ans += count + s[i];                                   //7
      } else {     
        ans += s[i];                                           //5
      }
      count = 1;                                               //1
    }
  }
  return ans;                                                  //1
};
/**
 * T_10(i) = 1 + 1 + 5i(8+1+3+7+5+1) + 1
 * T_10(i) = 3 + 100i
 * T_10(i) = 1 + i
 * T_10(i) = 1 + n
 * O(n)
 * Linéaire
 */