const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let sum = 0;
  matrix.map((el) => {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === 0) {
        arr[i] = 0;
      } else {
        if (arr[i] !== 0) {
          sum += el[i];
          arr[i] = 1;
        } else {
          arr[i] = 0;
        }
      }
    }
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
