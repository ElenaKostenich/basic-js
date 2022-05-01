const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr2 = s2.split('');

  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    if (arr2.indexOf(s1[i]) >= 0) {
      counter++;
      arr2[arr2.indexOf(s1[i])] = '';
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
