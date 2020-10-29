const binom = function (n, k) {
    if (k === n || k === 0) return 1;
    else return binom(n - 1, k - 1) + binom(n - 1, k);
}

console.log(binom(400, 40));