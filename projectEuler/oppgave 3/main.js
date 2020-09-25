const factors = new Array();

function primeFactors(arr, num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let i = 2; i <= num; i++) {
        while (isPrime(i) && num % i === 0) {
            if (!arr.includes(i)) arr.push(i);
            num /= i;
        }
    }
    return arr;
}

console.log(primeFactors(factors, 600851475143));