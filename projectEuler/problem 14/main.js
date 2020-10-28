let num = 0;
let longest = 0;

for (let i = 1; i < 1000000; i++) {
    let n = i;
    let arr = [n]
    while (1) {
        if (n % 2 === 0) {
            n = n / 2;
            arr.push(n);
        }
        else {
            n = (3 * n) + 1;
            arr.push(n);
        }

        if (n === 1) break;
    }
    if (arr.length > longest) {
        num = i;
        longest = arr.length;
    }
}

console.log(num);