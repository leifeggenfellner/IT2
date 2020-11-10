const isPandigital = n => {
    let m = 0;
    let i = 0;

    while (n > 0) {
        m += 1 << n % 10;
        n = Math.floor(n / 10);

        i++;
    }

    return 2 + m === 1 << (i + 1);
}


const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return n > 1;
}

const largestPandigitalPrime = () => {
    for (let i = 7654321; i > 1; i -= 2) {
        if (isPandigital(i) && isPrime(i)) return i;
    }
}
