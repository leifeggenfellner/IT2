/**
 * @author Leif Eggenfellner
 * @param {Number} b The base
 * @param {Number} n The exponent
 * @returns {Number} Returns the sum of the digits of the number 2^1000
 */

const sumDigits = (b, n) => {
    const num = BigInt(Math.pow(b, n));
    const str = num.toString();
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    };

    return sum;
}


