// Henter canvas og context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


// Definerer størrelsen på canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


// Lager en klasse for ball
class Square {

    /**
     * 
     * @constructor Henter, x-verdien, y-verdien og sidene til sirkelen
     * @param {Number} x x-koordinat
     * @param {Number} y y-koordinat
     * @param {Number} s lengden til sidene
     */

    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.s = s;
    }

    /**
     * @description Tegn sirkelen
     */

    draw() {
        ctx.fillStyle = "#00F";
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.s, this.s);
        ctx.closePath();
    }
}

// Definerer start koordinater og radius
const s = canvas.height / 50;
const x = 0 - s;
const y = canvas.height / 2 - s

// Lager sirkel
const square = new Square(x, y, s);

// Setter x-aksen sin y-verdi på canvas
let yFix = y;

// La sirkelen gå dette antallet piksler over og under yFix sin verdi
let range = canvas.height / (5 / 2);

/*
Kalkulerer sinus verdiene utifra angle variabelen.
Ettersom Math.sin bruker radianer må vi øke vinkelen i små steg --> angleInc.
Desto større angleInc veriden er, desto kortere blir perioden til sinus grafen.
*/
let angle = 0;
let angleIncrease = Math.PI / 100;

/*
Farten til bevegelsen.
1 betyr at x-verdien øker med 1, ergo perioden er 1.
Hvis verdien er 0 ville objektet gått opp og ned på samme plass.
*/
let speed = Math.PI;


/**
 * @description Animerer bevegelsen til objektet
 */

function animate() {

    // Fjerner det som tidligere er tegnet på canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Øker x-verdien
    square.x += speed;

    // Øker verdien for sinus kalkulasjonen
    angle += angleIncrease;

    // Definerer y-verdien til objektet
    square.y = yFix + Math.sin(angle) * range;

    // Tegner objektet
    square.draw();

    // Sender objektet tilbake til start når det går utenfor canvas
    if (square.x > canvas.width + s) {
        square.x = 0 - s;
    }

    // Starter en loop 
    window.requestAnimationFrame(animate);
}

animate();

/*
Ender canvas til å passe til browser størrelsen,
setter x-aksen til å være midt på skjermen,
endrer radiusen til å passe canvas størrelsen
*/

window.addEventListener('resize', void function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    yFix = canvas.height / 2 - s
    square.s = canvas.height / 50;
});