/**
 * 
 * @param {number} n 
 * @param {number} a 
 */

const halve = (n, a = 1 / 2) => n === 0 ? a : (n < 0) ? "RangeError" : halve(n - 1, a) / 2;