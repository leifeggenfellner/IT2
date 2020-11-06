/**
 * 
 * @param {Number} n 
 * @returns {Number} Returns how many digits n contains
 */

const numOfDigits = n => {
    let count = 0;

    while (0 < n) {
        count++;
        n = n / 10 | 0;
    }

    return count;
}

/**
 * 
 * @param {Number} n
 * @returns {Array.<Number>} Returns an array of all possible combinations of the digits in n
 */

const rotateNum = n => {
    const nums = [n];

    const digits = numOfDigits(n);
    const powTen = Math.pow(10, digits - 1);

    for (let i = 0; i < digits - 1; i++) {
        let firstDigit = Math.floor(n / powTen);
        let leftShifted = (n * 10 + firstDigit - (firstDigit * powTen * 10));
        nums.push(leftShifted);

        n = leftShifted;
    }

    return nums;
}

/**
 * 
 * @param {Number} n
 * @returns {Boolean} Returns a boolean value based on whether n is a prime number or not 
 */

const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n > 1;
}

/**
 * @returns {Number} Returns how many circular primes there are below one million
 */

const sunCircularPrimes = () => {
    const circularPrimes2d = [[2]];

    for (let i = 3; i <= 10 ** 6; i += 2) {
        let prime = true;

        const rotated = rotateNum(i);
        rotated.forEach(e => {
            if (!isPrime(e)) prime = false;
        });

        if (prime) circularPrimes2d.push(rotated);
    }

    const circularPrimes1d = [].concat(...circularPrimes2d);

    return new Set(circularPrimes1d).size;
}
