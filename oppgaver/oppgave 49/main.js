let nums = new Array();
let temp;

for (let i = 0; i < 10000; i++) {
  nums.push(Math.floor(Math.random() * 10000 + 1));
}

function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        sorted = false;

        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }

  return arr;
}