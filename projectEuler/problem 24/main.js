const nums = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
let N = nums.length;
let permutations = new Array();

const generate = (n, arr) => {
    if (n === 1) {
        permutations.push(arr.join(''));
    } else {
        generate(n - 1, arr);

        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                let temp = arr[i];
                arr[i] = arr[n - 1];
                arr[n - 1] = temp;
            } else {
                let temp = arr[0];
                arr[0] = arr[n - 1];
                arr[n - 1] = temp;
            }
            generate(n - 1, arr);
        }
    }
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

generate(N, nums);

const sorted = quickSort(permutations, 0, permutations.length - 1);

const ans = sorted.slice(999999, 1000000);