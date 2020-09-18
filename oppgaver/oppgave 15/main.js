const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");

for (let i = 1; i < 16; i++) {
    txt1.innerHTML += `${i} `;
}

for(let i = 1; i < 16; i++) {
    txt2.innerHTML += `${i}\n`;
}

for(let i = 1; i < 16; i++) {
    if (!(i % 2 == 0)) {
        txt3.innerHTML += `${i} `;
    }
}