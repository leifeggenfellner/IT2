let temp;
let nums = new Array();

for (let i = 0; i < 10000; i++) {
    nums.push(Math.floor(Math.random() * 10000 + 1));
}


function bubbleSort(arr) {
    temp = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(nums));