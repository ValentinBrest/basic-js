const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} arr1
 * @param {String} arr2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2 ) {
  arr1 = s1.split('').sort();
  arr2 = s2.split('').sort();

  let length = arr1.length >= arr2.length ? arr1.length : arr2.length
  let count = 0;
  for (let i = 0; i < length; i++) {
    let index = arr2.indexOf(arr1[i])
    if ((index != -1) ) {
        count += 1;
        arr2[index] = '*'
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
