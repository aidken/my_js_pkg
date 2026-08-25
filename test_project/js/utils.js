
/**
 * Utility functions module (ES Module)
 *
 * This file serves as the canonical source module.
 * For browser testing without a server, the functions are
 * inlined in index.html. When you have a server or bundler,
 * you can import this file directly.
 *
 * you can use this way with file://
 */

const Utils = {

  /**
   * add two numbers.
   * @param {number} a - a number.
   * @param {number} b - another number
   * @return {number} result, two numbers added.
   */
  add(a, b) {
    return a + b;
  },

  /**
   * subtract b from a.
   * @param {number} a - a number.
   * @param {number} b - number to subtract from a.
   * @return {number} result.
   */
  subtract(a, b) {
    return a - b;
  },

    /**
     * capitalize a string.
     * @param {string} str - a string.
     * @return {string} capitalized word.
     */
  capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * determine if a given number is even.
   * @param {number} n - a number.
   * @return {boolean} true if n is an even number.
   */
  isEven(n) {
    return n % 2 === 0;
  },

  /**
   * returns a reversed version of given string.
   * @param {string} str - input string.
   * @return {string} str - reversed input.
   */
  reverseString(str) {
    return str.split('').reverse().join('');
  },

  add_2(c) {
    const a = 5;
    const b = 2;

    function double(x) {
      return x * b
    };

    return double(c);

  },

}; // end Utils
