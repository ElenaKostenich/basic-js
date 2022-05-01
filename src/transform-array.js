const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let resArr = arr.concat();
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] === '--discard-next') {
      resArr[i + 1] && resArr[i] === arr[i]
        ? resArr.splice(i, 2)
        : resArr.splice(i, 1);
    }
    if (resArr[i] === '--discard-prev') {
      resArr[i - 1] && resArr[i] === arr[i]
        ? resArr.splice(i - 1, 2)
        : resArr.splice(i, 1);
    }
    if (resArr[i] === '--double-next') {
      resArr[i + 1] && resArr[i] === arr[i]
        ? resArr.splice(i, 1, resArr[i + 1])
        : resArr.splice(i, 1);
    }

    if (resArr[i] === '--double-prev') {
      resArr[i - 1] && resArr[i] === arr[i]
        ? resArr.splice(i, 1, resArr[i - 1])
        : resArr.splice(i, 1);
    }
  }

  return resArr;
}

module.exports = {
  transform,
};
