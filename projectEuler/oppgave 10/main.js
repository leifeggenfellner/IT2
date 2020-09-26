/**
 * 
 * @param {number} n 
 */

function sumSieve(n) {
    let arr = new Array();
    let output = new Array();
    let max = Math.sqrt(n);
    for (let i = 0; i < n; i++) {
        arr.push(true);
    }

    for (let i = 2; i <= max; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (arr[i]) {
            output.push(i);
        }
    }

    return output.reduce((a, b) => a + b, 0);
}

console.log(sumSieve(2000000));