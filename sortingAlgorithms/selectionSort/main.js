let temp;
let nums = new Array();

for (let i = 0; i < 10000; i++) {
    nums.push(Math.floor(Math.random() * 10000 + 1));
}

function selectionSort(arr) {
    temp = 0;
    for (let i = 0; i < arr.length; i++) {
        minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

console.log(selectionSort(nums));

