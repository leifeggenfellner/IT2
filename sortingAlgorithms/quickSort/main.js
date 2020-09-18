let temp;
let nums = new Array();

for (let i = 0; i < 10000; i++) {
    nums.push(Math.floor(Math.random() * 10000 + 1));
}

function partition(arr, low, high) {
    temp = 0;

    let i = low - 1;
    pivot = arr[high];

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

console.log(quickSort(nums, 0, nums.length - 1));