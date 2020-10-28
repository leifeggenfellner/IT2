function divideBy(n) {
    let max = 999;
    let x = Math.floor(max / n);
    return Math.floor(n * (x * (x + 1)) / 2);
}

console.log(divideBy(3) + divideBy(5) - divideBy(15));