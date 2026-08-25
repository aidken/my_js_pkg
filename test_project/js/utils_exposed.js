
/**
 * Utility functions module (ES Module)
 *
 * This file serves as the canonical source module.
 * For browser testing without a server, the functions are
 * inlined in index.html. When you have a server or bundler,
 * you can import this file directly.
 *
 * you can use this way with file://
 *
 * this version expose names by window.add = add; look at the
 * statements at the bottom.
 */

/**
 * add two numbers.
 * @param {number} a - a number.
 * @param {number} b - another number
 * @return {number} result, two numbers added.
 */
function add(a, b) {
  return a + b;
}

/**
 * subtract b from a.
 * @param {number} a - a number.
 * @param {number} b - number to subtract from a.
 * @return {number} result.
 */
function subtract(a, b) {
  return a - b;
}

  /**
   * capitalize a string.
   * @param {string} str - a string.
   * @return {string} capitalized word.
   */
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * determine if a given number is even.
 * @param {number} n - a number.
 * @return {boolean} true if n is an even number.
 */
function isEven(n) {
  return n % 2 === 0;
}

/**
 * returns a reversed version of given string.
 * @param {string} str - input string.
 * @return {string} str - reversed input.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

function add_2(c) {
  const a = 5;
  const b = 2;

  function double(x) {
    return x * b
  };

  return double(c);
}

class Person {
  /**
   * Creates a new Person instance.
   * @param {string} name - The person's name.
   * @param {number} age - The person's age.
   */
  constructor(name, age) {
    // Input validation
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Name must be a non-empty string.');
    }
    if (typeof age !== 'number' || age < 0) {
      throw new Error('Age must be a non-negative number.');
    }

    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello ${this.name}!`)
  }

}

// functions are already exposed, so you dont need write
// window.add = add;

// classes need to be exposed
window.Person = Person;
