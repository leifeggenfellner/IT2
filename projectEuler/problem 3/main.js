/**
 * 
 * @author Leif Eggenfellner 
 * @param {Number} n The number you wish to find the prime factors of
 * @returns {Number} Returns the largest prime factor of the number n
 */

const primeFactors = (n = 600851475143) => {
    const arr = new Array();

    const isPrime = n => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    for (let i = 2; i <= n; i++) {
        while (isPrime(i) && n % i === 0) {
            if (!arr.includes(i)) arr.push(i);
            n /= i;
        }
    }

    return Math.max(...arr);
}
