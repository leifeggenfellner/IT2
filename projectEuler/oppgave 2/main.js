let nums = new Array();

function fib(arr) {
    let fib = 1;
    let fibPrev = 0;
    while (1) {
        let temp = fib;
        fib += fibPrev;
        fibPrev = temp;

        if (fib > 4000000) {
            break;
        } else {
            if (fib % 2 === 0) {
                arr.push(fib);
            }
        }
    }
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum;
}

console.log(fib(nums));

