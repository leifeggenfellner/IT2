/**
 * 
 * @param {Number} n
 * @returns {Number} Returns the sum of the digits in the number n!
 */

const sumAnsFact = (n = 100) => {
    let sum = 1n;

    for (let i = BigInt(n); i > 0n; i--) {
        sum *= i;
    }

    const arr = sum.toString().split('').map(x => +x);
    return arr.reduce((a, b) => Number(a) + Number(b), 0);
}
