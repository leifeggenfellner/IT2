/**
 * @author Leif Eggenfellner
 * @returns {Number} Returns the sum fo the even valued terms of the Fibonacci sequence whose values do not exceed four million
 */

const fib = () => {
    const arr = new Array();

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

    return arr.reduce((a, b) => a + b, 0)
}
