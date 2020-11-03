/**
 * @author Leif Eggenfellner
 * @param {Number} n The number to check if is prime
 * @returns {Boolean} Returns a boolean value dependant on if n is a prime number or not
 */

const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++)
        if(n % i === 0) return false; 
    return n > 1;
}

/**
 * 
 * @param {Number} n 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} Returns the result of the function n**2 + a*n + b
 */

const quadraticFunction = (n, a, b) => {
    return Math.pow(n, 2) + (a * n) + b;
}

/**
 * 
 * @param {Number} a 
 * @param {Number} b
 * @returns {Number} Returns the number of times the result of quaraticFunction() has been consecutive primes
 */

const consecutivePrimes = (a, b) => {
    for (let n = 0; ; n++) {
        if (!isPrime(quadraticFunction(n, a, b))) {
            return n;
        }
    }
}

/**
 * 
 * @param {Number} limit The limit of the loop
 * @returns {Array.<Number>} Returns an array of all primes from 1 to limit 
 */

const primeList = limit => {
    let primes = [1, 2];

    for (let i = 3; i <= limit; i += 2) {
        if (isPrime(i)) primes.push(i);
    }

    return primes;
}

/**
 * @returns {Number} Returns the products of the coefficients that produces the maximum number of primes for consecutive values of n;
 */

const longestConsecutive = () => {
    let primes = primeList(1000);
    let longest = [0, 0, 0];    

    for (let a = -999; a <= 999; a += 2) {
        for (let i = 0; i < primes.length; i++) {
            if (consecutivePrimes(Math.abs(a), primes[i]) > longest[2]) {
                let currentCount = consecutivePrimes(a, primes[i]);

                if (currentCount > longest[2]) {
                    longest = [a, primes[i], currentCount];
                }
            }
        }
    }
    return longest[0] * longest[1];
}
