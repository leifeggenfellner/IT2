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
            return m;
        }
    }
    return false;
}