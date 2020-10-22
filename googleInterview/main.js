function binarySearch(A, T) {
    let L = 0;
    let R = A.length - 1;

    while (L <= R) {
        let m = Math.floor((L + R) / 2);
        if (A[m] < T) {
            L = m + 1;
        } else if (A[m] > T) {
            R = m - 1;
        } else {
            return true;
        }
    }
    return false;
}

function sumPair() {
    let arr = [1, 2, 3, 5, 6, 8, 9, 56];
    let sum = 65;
    for (let i = 0; i < arr.length - 1; i++) {
        if (binarySearch(arr.slice(i + 1, arr.length), sum - arr[i]))
            return true;
    }

    return false;
}

console.log(sumPair());