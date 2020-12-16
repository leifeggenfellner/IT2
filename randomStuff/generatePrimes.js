const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i === 2 ? i++ : i += 2) if (n % i === 0) return false;
    return n > 1;
}

const generatePrimes = n => {
    const primes = new Array();
    for (let i = 2; i <= n; i === 2 ? i++ : i += 2) if (isPrime(i)) primes.push(i);
    return primes;
}

console.log(generatePrimes(2000000));
