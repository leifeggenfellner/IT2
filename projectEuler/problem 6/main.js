/**
 * 
 * @author Leif Eggenfellner
 * @param {Number} n 
 * @returns {Number} Returns the difference between the sum of the squares of the first n natural numbers and the square of the sum
 */

function sumDiff(n) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i <= n; i++) {
        sum1 += Math.pow(i, 2);
        sum2 += i;
    }

    return Math.pow(sum2, 2) - sum1;

}
