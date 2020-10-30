/**
 * 
 * @param {number} n
 * @returns {number} Returns the sum of the digits in the number n!
 */

const sumAnsFact = n => {
    let sum = 1n;

    for (let i = BigInt(n); i > 0n; i--) {
        sum *= i;
    }

    let arr = sum.toString().split('');
    for (let i = 0; i < arr.length; i++) arr[i] = +arr[i];
    let ans = arr.reduce((a, b) => Number(a) + Number(b), 0);
    
    return ans;
}