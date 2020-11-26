const decimal = document.getElementById("desimal")
const hex = document.getElementById("heksadesimal")
const binary = document.getElementById("binær")

document.activeElement.addEventListener("input", e => {
    let value;
    if (e.target.id == "desimal") {
        value = parseInt(document.activeElement.value, 10);
    } else if (e.target.id == "heksadesimal") {
        value = parseInt(document.activeElement.value, 16);
    } else if (e.target.id == "binær") {
        value = parseInt(document.activeElement.value, 2);
    }

    if (document.activeElement.value.length === 0) {
        decimal.value = "";
        hex.value = "";
        binary.value = "";
    } else {
        const hexVal = value.toString(16);
        const binaryVal = value.toString(2);
        const decimalVal = value.toString(10);
        hex.value = hexVal.toUpperCase();
        binary.value = binaryVal;
        decimal.value = decimalVal;
    }
});