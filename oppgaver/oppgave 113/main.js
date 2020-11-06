/**
 * @author Leif Eggenfellner
 */

const pOut = document.getElementById("pOut");
const btn = document.getElementById("btn");
const box = document.getElementById("box");

pOut.style.fontSize = "18px";


class Form {
    q;
    a;
    i;

    /**
     * 
     * @param {String} q 
     * @param {Array.<String>} a 
     * @param {Number} i 
     */

    constructor(q, a, i,) {
        this.q = q;
        this.a = a;
        this.i = i;
    }
}

const questions = new Array();

const a = new Form("How long is Patrick's balls?", ["8 m", "1 m", "69 m"], 0);
const b = new Form("How long is Patrick's dick?", ["19", "4 m", "420 m", "your mom"], 1);
const c = new Form("What is Shayan?", ["Sand Nigger", "Sand Slave", "Gayan", "Human"], 2);
const d = new Form("Does this question suck?", ["yes", "ofc", "why wouldn't it?", "kill me pls", "i want to die"], 3);
const e = new Form("Do you want to kill me?", ["yes :)", "no :(", "kill me too", "why not?"], 2);
const f = new Form("This is the last question so fuck you?!", ["fuck me"], 0);

questions.push(a, b, c, d, e, f);

let j = 0;
let score = 0;

void function renderForm() {

    pOut.innerText = questions[j].q;

    for (let i = 0; i < questions[j].a.length; i++) {
        const radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.id = `opt${i}`;
        radiobox.value = `${i}`;
        radiobox.name = `opt`;

        const label = document.createElement('label')
        label.htmlFor = `opt${i}`;

        const answerAlt = document.createTextNode(` ${questions[j].a[i]}`);
        label.appendChild(answerAlt);

        const newline = document.createElement('br');

        box.appendChild(radiobox);
        box.appendChild(label);
        box.appendChild(newline);
    }
}

renderForm();

btn.onclick = () => {
    const checkRadio = document.querySelector('input[name="opt"]:checked');
    if (checkRadio.value == questions[j].i) score++;

    ++j;

    pOut.innerText = "";
    box.innerHTML = "";

    if (j < questions.length) renderForm();
    else {
        pOut.innerText = `Score: ${score} out of ${questions.length}`;
        btn.style.display = "none";
    }
}


