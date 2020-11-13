class Fraction {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add(fraction) {
        if (!(fraction.a % 1 === 0 || fraction.b % 1 === 0 || this.a % 1 === 0 || this.b % 1 === 0)) return "Error: Not all numbers are integers."

        const temp = fraction.b;

        fraction.a *= this.b;
        fraction.b *= this.b;
        this.a *= temp;
        this.b *= temp;

        const commonDivisor = gcd(gcd(this.a, this.b), gcd(fraction.a, fraction.b));

        this.a /= commonDivisor;
        fraction.a /= commonDivisor;
        this.b /= commonDivisor;
        fraction.b /= commonDivisor;

        let numerator = this.a + fraction.a;
        let divisor = this.b;

        if (divisor === 1) return `${numerator}`;
        else if (numerator === divisor) return "1";


        return `${numerator}/${divisor}`;
    }

    sub(fraction) {
        if (!(fraction.a % 1 === 0 || fraction.b % 1 === 0 || this.a % 1 === 0 || this.b % 1 === 0)) return "Error: Not all numbers are integers."

        const temp = fraction.b;

        fraction.a *= this.b;
        fraction.b *= this.b;
        this.a *= temp;
        this.b *= temp;

        const commonDivisor = gcd(gcd(this.a, this.b), gcd(fraction.a, fraction.b));

        this.a = this.a / commonDivisor;
        fraction.a /= commonDivisor;
        this.b /= commonDivisor;
        fraction.b /= commonDivisor;

        let numerator = this.a - fraction.a;
        let divisor = this.b;

        if (divisor === 1) return `${numerator}`;
        else if (numerator === divisor) return "1";

        return `${numerator}/${divisor}`;
    }

    mul(fraction) {
        let numerator = this.a * fraction.a;
        let divisor = this.b * fraction.b;

        const commonDivisor = gcd(numerator, divisor);

        numerator /= commonDivisor;
        divisor /= commonDivisor;

        if (divisor === 1) return `${numerator}`;
        else if (numerator === divisor) return "1";


        return `${numerator}/${divisor}`;
    }

    div(fraction) {
        let numerator = this.a * fraction.b;
        let divisor = this.b * fraction.a;

        const commonDivisor = gcd(numerator, divisor);

        numerator /= commonDivisor;
        divisor /= commonDivisor;

        if (divisor === 1) return `${numerator}`;
        else if (numerator === divisor) return "1";

        return `${numerator}/${divisor}`;
    }
}

const gcd = (a, b) => {
    while (a !== b) {
        if (a > b) a -= b;
        else b -= a;
    }

    return b;
}
