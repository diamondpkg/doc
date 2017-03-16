'use strict';

class Parse {
  constructor(iterator) {
    this.i = iterator;
    this.c = '';
  }

  start() {
    while (this._iterate()) {
      if (this.checkPrefix()) {
        //
      }
    }
  }

  checkPrefix() {
    let prev = '';
    for (let i = 0; i < 3; i++) {
      prev += this.c;
      this._iterate();
    }
    return prev === '/**';
  }

  _iterate() {
    return this.c = this.i.next().value;
  }
}

module.exports = (content) => {
  const parser = new Parse(content[Symbol.iterator]());
  parser.start();
};
