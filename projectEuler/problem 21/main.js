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
        let divs1 = divisors(i);
        let sum1 = divs1.reduce((a, b) => Number(a) + Number(b), 0);
        let divs2 = divisors(sum1);
        let sum2 = divs2.reduce((a, b) => Number(a) + Number(b), 0);
        if (i === sum2 && i !== sum1) {
            amicable.push(i);
        }
    }

    let ans = amicable.reduce((a, b) => Number(a) + Number(b), 0);

    return ans;
}