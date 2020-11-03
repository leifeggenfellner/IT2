/**
 * @author Leif Eggenfellner
 * @param {Number} n BigInt 
 */

const fib = (n) => {
    let arr = new Array(n + 1n);
    arr[1] = 1n;
    arr[2] = 1n;
    for (let i = 3n; i < n + 1n; i++){
        arr[i] = arr[i - 1n] + arr[i - 2n];
    }

    return arr[n];
}

/**
 * @param {Number} i BigInt
 */

const numLength = (i) => {
    while (i < Number.MAX_SAFE_INTEGER) {
        if (fib(i).toString().length >= 1000) return parseInt(i);
        i++;
    }
}