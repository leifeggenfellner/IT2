let nums = new Array();

for (let i = 0; i < 10000; i++) {
    nums.push(Math.floor(Math.random() * 10000 + 1));
}

let key;

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr
}

console.log(insertionSort(nums));
