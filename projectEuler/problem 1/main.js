/**
 * 
 * @param {Number} n The number of which you like to find the sum of all the multiples of 3 or 5 below
 * @returns {Number} Returns the sum of all the multiples of 3 or 5 below n
 */

const sumMultiples = (n = 1000) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
