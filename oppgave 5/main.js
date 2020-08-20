form.onsubmit = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let product = num1 * num2;
    let txt = document.getElementById("txt");
    txt.innerHTML = product;
    return false;
}