const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();
  let set = new Set();

  domains.map((el) => {
    let item = el;
    let arrEl = el.split('.').reverse();
    let iter = 0;
    while (iter < arrEl.length) {
      let suffix = '';
      for (let j = 0; j <= iter; j++) {
        suffix = '.' + arrEl[j] + suffix;
      }
      let count = 0;
      if (suffix.startsWith('.')) {
        suffix = suffix.substring(1);
      }
      if (!set.has(suffix)) {
        set.add(suffix);
        for (let i = 0; i < domains.length; i++) {
          if (domains[i].endsWith(suffix)) {
            count++;
          }
        }
        let arr = suffix.split('.').reverse();
        let itog = '';
        for (k = 0; k < arr.length; k++) {
          itog += '.' + arr[k];
        }
        map.set(itog, count);
      }

      iter++;
    }
  });
  return Object.fromEntries(map);
}

module.exports = {
  getDNSStats,
};
