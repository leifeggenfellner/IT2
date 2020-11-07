/**
 * 
 * @param {Number} n
 * @returns {Boolean} Returns a boolean value based on whether n is a prime number or not 
 */

const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return n > 1;
}

/**
 * 
 * @param {Number} n
 * @returns {Array.<Number>} Returns n truncated from left to right and vice versa 
 */

const truncate = n => {
    const nums = [n];
    let num1;
    let num2 = num1 = n.toString();

    while (num1.length > 1) {
        num1 = num1.slice(0, -1);
        num2 = num2.slice(1);

        nums.push(Number(num1), Number(num2));
    }

    return nums;
}

/**
 * @returns {Number} Returns the sum of all truncable primes
 */

const sumTruncatablePrimes = () => {
    const truncatablePrimes = new Array();
    let i = 11;
    
    while (truncatablePrimes.length < 11) {
        let prime = true;
        const numTruncated = truncate(i);

        numTruncated.forEach(e => {
            if (!isPrime(e)) prime = false;
        });

        if (prime) truncatablePrimes.push(i);
        i += 2;
    }

    return truncatablePrimes.reduce((a, b) => a + b, 0);
}
