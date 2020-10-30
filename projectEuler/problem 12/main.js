function triangleDivs() {
    function divisors(n) {
        let numFactors = 0;
        for (let i = 1; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
            if (n % i === 0) {
                numFactors += 2;
            }
            if (i * i === n) {
                numFactors--;
            }
        }
        return numFactors;
    }

    let count;
    for (let n = 1; n < Number.MAX_SAFE_INTEGER; n++) {
        let tNum = (n * (n + 1) / 2);
        if (n % 2 === 0) {
            count = divisors(n / 2) * divisors((n + 1) / 2);
        } else {
            count = divisors(n) * divisors((n + 1) / 2);
        }
        if (count >= 500) {
            return tNum;
        }
    }
}