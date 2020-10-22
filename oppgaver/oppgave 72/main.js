function root(a) {
    const num = Math.floor(Math.sqrt(a)) ** 2;
    const b = Math.sqrt(num);
    const c = a - num;
    const ans = b + (c / (2 * b));

    return ans;
}

let bad = new Array();
let good = new Array();

for (let i = 1; i <= 100; i++) {
    bad.push(root(i));
    good.push(Math.sqrt(i));
}