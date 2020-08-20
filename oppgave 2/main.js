let cat = document.getElementById("cat");
let dog = document.getElementById("dog");
let empty = document.getElementById("empty");
let txt = document.getElementById("txt");

let node;
let e;
let child;

cat.onclick = () => {
    node = document.createTextNode("katt");
    let linebreak = document.createElement("br");
    txt.appendChild(node);
    txt.appendChild(linebreak);
}

dog.onclick = () => {
    node = document.createTextNode("hund");
    let linebreak = document.createElement("br");
    txt.appendChild(node);
    txt.appendChild(linebreak);
}

empty.onclick = () => {
    txt.innerHTML = "";
}