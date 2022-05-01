const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == null) return 'Unable to determine the time of year!';

  let dates = new Date(date);
  try {
    let month = dates.getMonth();
    if (
      Object.getOwnPropertyNames(date).length > 0 ||
      isNaN(Date.parse(date))
    ) {
      throw new Error('Invalid date!');
    }

    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    if ((month = 11 || month <= 1)) return 'winter';
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
