
/**
 * Utility functions module (ES Module)
 *
 * NOTE: This file serves as the canonical source module.
 * For browser testing without a server, the functions are
 * inlined in index.html. When you have a server or bundler,
 * you can import this file directly.
 */

const Utils = {
add(a, b) {
  return a + b;
},

subtract(a, b) {
  return a - b;
},

capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
},

isEven(n) {
  return n % 2 === 0;
},

reverseString(str) {
  return str.split('').reverse().join('');
},

};
