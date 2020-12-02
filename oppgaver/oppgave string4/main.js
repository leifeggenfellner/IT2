const body = document.querySelector("body");
const output = document.getElementById("output");
const wordInput = document.getElementById("word");
body.style.display = "grid";
body.style.width = "400px";

wordInput.addEventListener("input", () => {
    const word = document.getElementById("word").value;
    if (word.length !== 0) {
        const txt = document.getElementById("txt").value;
        const pattern = new RegExp("\\b" + word + "\\b", "ig");
        const occurances = (txt.match(pattern) || []).length;
        output.innerText = occurances;
    }
});

