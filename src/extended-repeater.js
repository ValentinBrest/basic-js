const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, {repeatTimes = 1 ,separator = '+', additionSeparator = '|', ...options}= options ) {
		let strRes = [],
			addRes = [],
			repT = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1,
			add = (options.hasOwnProperty('addition')) ? `${options.addition}` : '',
			addRepT = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1
		for (j = 1; j <= addRepT; j++) {
		  addRes.push(add);
		}
		for (i = 1; i <= repeatTimes; i++) {
		  strRes.push(str+addRes.join(`${additionSeparator}`));
		}
		return strRes.join(`${separator}`);
	  }


module.exports = {
  repeater
};
