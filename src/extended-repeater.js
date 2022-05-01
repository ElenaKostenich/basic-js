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
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
  if (options.addition == undefined && options.addition !== null)
    options.addition = '';

  let resStr = '';
  let newStr = '';
  newStr += str;

  if (options.additionRepeatTimes !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      let optionsAddition = '';
      optionsAddition += options.addition;

      newStr += optionsAddition;

      newStr += options.additionSeparator;
    }
    let lengthAdditionSeparator = options.additionSeparator;
    newStr = newStr.substring(
      0,
      newStr.length - lengthAdditionSeparator.length
    );
  }

  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resStr += newStr;
      resStr += options.separator;
    }
    let lengthSeparator = options.separator;
    resStr = resStr.substring(0, resStr.length - lengthSeparator.length);
  }

  return resStr;
}

module.exports = {
  repeater,
};
