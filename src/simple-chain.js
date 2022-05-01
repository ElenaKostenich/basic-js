const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arrRes: [],

  getLength() {
    let lengthArr = this.arrRes.length;
    return lengthArr;
  },
  addLink(value) {
    if (typeof value !== 'undefined') {
      this.arrRes.push(`( ${value} )`);
      return this;
    }
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position % 1 == 0 && this.arrRes.length > position) {
      this.arrRes.splice(position - 1, 1);
    } else {
      this.arrRes = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    return this;
  },
  reverseChain() {
    this.arrRes.reverse();
    return this;
  },
  finishChain() {
    let str = this.arrRes.slice().join('~~');
    this.arrRes = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
