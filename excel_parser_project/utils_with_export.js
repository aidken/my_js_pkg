
/**
 * Utility functions module (ES Module)
 *
 * NOTE: This file serves as the canonical source module.
 * For browser testing without a server, the functions are
 * inlined in index.html. When you have a server or bundler,
 * you can import this file directly.
 */

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isEven(n) {
  return n % 2 === 0;
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

