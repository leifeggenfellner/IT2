let txt = document.getElementById("spanOutput");
let btn = document.getElementById("buttonCalculate");

btn.onclick = function () {
    let weight = parseFloat(document.getElementById("inputWeight").value);
    let height = parseFloat(document.getElementById("inputHeight").value);
    let str = (weight / Math.pow(height, 2)).toFixed(3).toString();
    txt.innerText = str;
}