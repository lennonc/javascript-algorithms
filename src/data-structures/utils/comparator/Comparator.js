export default class Comparator {
/**
 * @param {function(a: *, b: *)} [compareFunction] - It may be custom compare function that, let's
 * say may compare custom objects together.
 */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function.
   * @param { string | number } a
   * @param { string | number } b
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Check if two variables are equal
   * @param {*} a
   * @param {*} b
   *
   * @returns {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }
}
