const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
let i = 1;
let j = 1;
let k = 1;

while (i < 16) {
    txt1.innerHTML += `${i} `;
    i++;
}

i = 1;

while(i < 16) {
    txt2.innerHTML += `${i}\n`;
    i++;
}

i = 1;

while(i < 16) {
    if (!(i % 2 == 0)) {
        txt3.innerHTML += `${i} `;
    }
    i++;
}