let item;
let new_item;
let all;
let form = document.getElementById("form");

function handleForm(event) {
    event.preventDefault();
}

form.addEventListener("submit", handleForm);

add.onclick = function () {
    let linebreak = document.createElement("br");
    item = document.getElementById("item").value;
    node = document.createTextNode(item);
    new_item = document.getElementById("new");
    all = document.getElementById("all");
    console.log(item);
    new_item.innerHTML = item;
    console.log(item);
    all.appendChild(node);
    all.appendChild(linebreak);
}