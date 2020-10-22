/**
 * 
 * @param {number} n 
 */

function findTrinagle(n) {
  for (let c = 0; c < n; c++) {
    for (let b = 0; b < n; b++) {
      for (let a = 0; a < n; a++) {
        if (a < b && b < c && a + b + c === n && a ** 2 + b ** 2 === c ** 2) {
          return a * b * c;
        }
      }
    }
  }
}