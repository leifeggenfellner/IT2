/**
 * 
 * @param {Number} n 
 * @returns {Number} Returns the factorial of n
 */

const factorial = n => {
    let sum = 1;

    for (let i = 2; i <= n; i++) {
        sum *= i;
    }

    return sum;
}

/**
 * 
 * @param {Number} n
 * @returns {Number} Returns the sum of the factorial of each digit in n 
 */

const sumFactorial = n => {
    let sum = 0;

    let str = n.toString();
    for (let l of str) sum += factorial(Number(l));

    return sum;
}

/**
 * @returns {Number} Returns the sum of all numbers which are equal to the sum of the factorial of their digits.
 */

const sumEqual = () => {
    let sum = 0;

    for (let i = 10; i < 1500000; i++) {
        if (i === sumFactorial(i)) sum += i;
    }

    return sum;
}
