const form = document.getElementById("form");
const txt = document.getElementById("txt");

const inputFields = Math.floor(Math.random() * 5 + 3);
const fields = new Array();

for (let i = 0; i < inputFields; i++) {
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "number");
}