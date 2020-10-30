/**
 * 
 * @param {number} n The value you want all divisors of.
 * @returns Returns all divisors of n.
 */

function divisors(n) {
    const divs = new Array();
    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && i !== n) {
            divs.push(i);
        }
    }

    return divs;
}

/**
 * 
 * @param {number} n The value of which you want the sum of all amicable numbers under.
 * @returns Returns the sum of all amicable numbers under n.
 */

function sumAmicable(n) {
    const amicable = new Array();

    for (let i = 0; i < n; i++) {
        let sum1 = divisors(i).reduce((a, b) => Number(a) + Number(b), 0);
        let sum2 = divisors(sum1).reduce((a, b) => Number(a) + Number(b), 0);
        if (i === sum2 && i !== sum1) {
            amicable.push(i);
        }
    }

    let ans = amicable.reduce((a, b) => Number(a) + Number(b), 0);

    return ans;
}
