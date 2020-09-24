const txt = document.getElementById("txt");
const btn = document.getElementById("btn");

txt.innerHTML += "number\tsum\tmean\n";
let arr = new Array();

let sum;

btn.addEventListener("click", () => {
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
        sum = arr.reduce(function (a, b) {
            return a + b;
        }, 0);
        txt.innerHTML += `${i}\t${sum}\t${sum / arr.length}\n`;
    }
});
