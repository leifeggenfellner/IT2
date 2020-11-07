/**
 * 
 * @param {Number} n The number you wish to generate prime number up to.
 * @returns {Array.<Number>} Returns an array of all prime numbers up to n.
 */

const generatePrimes = (n = 20) => {
    const store = new Array();
    const primes = new Array();

    for (let i = 2; i <= n; ++i) {
        if (!store[i]) {
            primes.push(i);

            for (j = i << 1; j <= n; j += i) {
                store[j] = true;
            }
        }
    }
    
    return primes;
}

/**
 * 
 * @param {Number} n 
 * @returns {Number} Returns the smallest positive number that is evenly divisible by all of the numbers from 1 to n.
 */

const smallestNum = (n = 20) => {
    const primes = generatePrimes();

    let num = 1;
    
   for (let i = 0; primes[i] <= n; i++) {
      num *= Math.pow(primes[i], Math.floor(Math.log(n) / Math.log(primes[i])));
    }
    
   return num;
}
    