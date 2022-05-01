const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];

  matrix.map((el) => {
    let arr = [];
    for (let i = 0; i < el.length; i++) {
      if (el[i] == true) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    newArr.push(arr);
    arr = [];
  });

  let resArr = [];

  let arr = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      let counter = 0;
      if (newArr[i][j - 1]) {
        counter++;
      }
      if (newArr[i][j + 1]) {
        counter++;
      }

      if (newArr[i - 1]) {
        if (newArr[i - 1][j - 1]) {
          counter++;
        }
        if (newArr[i - 1][j]) {
          counter++;
        }
        if (newArr[i - 1][j + 1]) {
          counter++;
        }
      }

      if (newArr[i + 1]) {
        if (newArr[i + 1][j - 1]) {
          counter++;
        }
        if (newArr[i + 1][j]) {
          counter++;
        }
        if (newArr[i + 1][j + 1]) {
          counter++;
        }
      }
      arr.push(counter);
    }
    resArr.push(arr);
    arr = [];
  }

  return resArr;
}

module.exports = {
  minesweeper,
};
