const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  number : [],

  getLength() {
    return (this.number.length)
  },
  addLink(value) {
    if (arguments) {
      this.number = [...this.number, `( ${value} )`]
    } else {
      this.number = [...this.number, String(value)]
    }
    return this
  },
  removeLink(position ) {
    if ((typeof position !== 'number') || (position < 1) || (position > this.number.length)) {
      this.number = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.number.splice(position - 1, 1)
    return this
  },
  reverseChain() {
   this.number = [...this.number].reverse()
   return this
  },
  finishChain() {
    let str = this.number.join('~~')
    this.number = []
    return str
  }
};

module.exports = {
  chainMaker
};
