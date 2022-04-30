const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
for (let i = 0; i < str.length; i++) {

  let item = str[i]; 
  let count = 1;

  while (str[i + 1] === item) {
    count++
    i++
  }
  result += `${count === 1 ? '' :count}${item}`

}

return result
}

module.exports = {
  encodeLine
};
