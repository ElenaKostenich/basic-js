const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(boolValue = true) {
    this._boolValue = !boolValue;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let keyUpperCase = key.toUpperCase();

    let stringUpperCase = string.toUpperCase();

    let newKey = keyUpperCase.padEnd(stringUpperCase.length, keyUpperCase);
    let arrKey = newKey.split('');
    let arrChar = [' ', '!', ',', '.'];

    for (let i = 0; i < stringUpperCase.length; i++) {
      if (arrChar.indexOf(stringUpperCase[i]) >= 0) {
        arrKey.splice(i, 0, arrChar[arrChar.indexOf(stringUpperCase[i])]);
      }
    }
    let arrIndKey = [];
    let arrIndStr = [];
    arrKey.map((el) => arrIndKey.push(alphabet.indexOf(el)));
    stringUpperCase.split('').map((el) => arrIndStr.push(alphabet.indexOf(el)));
    let resArr = [];
    for (let i = 0; i < arrIndStr.length; i++) {
      if (arrIndStr[i] === -1) {
        resArr.push(stringUpperCase[i]);
      } else {
        let ind = arrIndStr[i] + arrIndKey[i];
        resArr.push(alphabet[ind]);
      }
    }
    return this._boolValue === true
      ? resArr.reverse().join('')
      : resArr.join('');
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let keyUpperCase = key.toUpperCase();

    let stringUpperCase = string.toUpperCase();

    let newKey = keyUpperCase.padEnd(stringUpperCase.length, keyUpperCase);
    let arrKey = newKey.split('');
    let arrChar = [' ', '!', ',', '.'];

    for (let i = 0; i < stringUpperCase.length; i++) {
      if (arrChar.indexOf(stringUpperCase[i]) >= 0) {
        arrKey.splice(i, 0, arrChar[arrChar.indexOf(stringUpperCase[i])]);
      }
    }
    let arrIndKey = [];
    let arrIndStr = [];
    arrKey.map((el) => arrIndKey.push(alphabet.indexOf(el)));
    stringUpperCase.split('').map((el) => arrIndStr.push(alphabet.indexOf(el)));
    let resArr = [];
    for (let i = 0; i < arrIndStr.length; i++) {
      if (arrIndStr[i] === -1) {
        resArr.push(stringUpperCase[i]);
      } else {
        let ind;
        if (arrIndStr[i] < arrIndKey[i]) {
          ind = arrIndStr[i] - arrIndKey[i] + 26;
        } else {
          ind = arrIndStr[i] - arrIndKey[i];
        }
        resArr.push(alphabet[ind]);
      }
    }

    return this._boolValue === true
      ? resArr.reverse().join('')
      : resArr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
