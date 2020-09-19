function pascalRecursive(n, arr) {

    if (n < 2) return arr;

    var pr = arr[arr.length - 1];
    var cr = [1];

    for (var i = 1; i < pr.length; i++) {
        cr[i] = pr[i] + pr[i - 1];
    }
    cr.push(1);
    arr.push(cr);

    return pascalRecursive(n - 1, arr);
}


function pascal(row) {
    let nr = 10;
    let triangle = pascalRecursive(nr, [
        [1]
    ]);

    return triangle[row];
}