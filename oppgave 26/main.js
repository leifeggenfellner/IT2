const input = document.getElementById("inputField");
const sum_txt = document.getElementById("sum");
const product_txt = document.getElementById("product");
const btn = document.getElementById("submit");

let sum = 0;
let product = 1;

btn.onclick = function () {
    for (let i = 1; i <= parseInt(input.value); i++) {
        sum += 2 * i + 1;
        console.log(i);
    }

    for (let i = 1; i <= parseInt(input.value); i++) {
        product *= 2 * i + 1;
    }

    sum_txt.innerHTML = sum;
    product_txt.innerHTML = product;
}