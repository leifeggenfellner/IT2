/**
 * 
 * @param {number} n The value you want all divisors of.
 * @returns Returns all divisors of n.
 */

const divisors = n => {
    const divs = new Array();
    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && i !== n) {
            divs.push(i);
        }
    }

    return divs.reduce((a, b) => a + b, 0);
}

/**
 * 
 * @param {number} n
 * @returns Returns a bool value based on if n is a abundent number or not.
 */

const checkAbundance = n => {
    return (divisors(n) > n) ?  true :  false;
}

/**
 * @returns Returns the sum of all non-abundant numbers
 */

const sumnums = () => {
    const abundent = new Array();

    for (let i = 0; i <= 28123; i++) {
        if (checkAbundance(i)) {
            abundent.push(i);
        }
    }
    
    let sums = new Array(28124).fill(0);
    
    for (let i = 0; i < abundent.length; i++) {
        for (let j = i; j < abundent.length; j++) {
            let sum = abundent[i] + abundent[j];
            if (sum <= 28123) {
                if (sums[sum] === 0) sums[sum] = sum;
            }
        }
    }
    
    let total = 0;
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] === 0) {
            total += i;
        }
    }

    return total;
}
