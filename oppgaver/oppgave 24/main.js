const input = document.getElementById("inputField");
const btn = document.getElementById("submit");
const sum_display = document.getElementById("sum");
const array_len = document.getElementById("array_len");
const average = document.getElementById("average");

let num;
let sum;
let len;
let nums = [];


function addNum() {
    if (!input.value == "") {
        num = parseFloat(input.value);
        nums.push(num);
    }
}

btn.onclick = function () {
    addNum();
    sum = nums.reduce((x, y) => x + y, 0);
    len = nums.length;
    input.value = "";
    sum_display.innerHTML = sum;
    array_len.innerHTML = len;
    average.innerHTML = sum / len;
};
