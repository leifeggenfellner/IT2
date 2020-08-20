buttonCalculate.onclick = function () {
    let fahrenheit = document.getElementById("inputFahrenheit").value;
    let celsius;
    celsius = (fahrenheit - 32) * (5 / 9);
    let txt = document.getElementById("pOutput");
    txt.innerHTML = celsius;
    return false;
}