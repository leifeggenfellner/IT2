// Henter canvas og context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


// Definerer størrelsen på canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Lager en klasse for bilder
class Face {

    /**
     * 
     * @constructor Henter, x-verdien, y-verdien og sidene til sirkelen
     * @param {Number} x x-koordinat
     * @param {Number} y y-koordinat
     * @param {Number} w Bredden til bildet
     * @param {Number} h Høyden til bildet
     */

    constructor(img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.frameX = 0;
    }

    /**
     * 
     * @param {Number} dx Delta x 
     * @param {Number} yFix fixed y-value
     * @param {Number} angle angle of the sine curve
     * @param {Number} range the amplitude from yFix
     */

    update(dx, yFix, angle, range) {
        this.x += dx;
        this.y = yFix + Math.sin(angle) * range;
    }

    /**
     * @description Draw the image
     */

    draw() {
        ctx.drawImage(this.img, this.w * this.frameX, 0, this.w, this.h, this.x, this.y, this.w, this.h);
    }
}

// Lager bakgrunnsbildet
const background = new Image();
background.src = "./images/wallpaper.jpg";

// Lager audio
const bgm = new Audio();
bgm.src = "./audio/dejaVu.mp3";
// Får loopen til å spille på nytt når den er ferdig
bgm.loop = true;

// Lager et array til objektene
const faces = new Array();

// Lager bildene
const leifSprite = new Image();
const karoSprite = new Image();
const shayanSprite = new Image();

// Definerer bilde kildene
leifSprite.src = "./images/leif.png";
karoSprite.src = "./images/karo.png";
shayanSprite.src = "./images/shayan.png";

// Definerer høyde, x-verdi og y-verdi
const h = 84;
let x;
const y = canvas.height / 2 - h / 2;

/**
 * 
 * @param {Number} w Width
 * @param {Array} arr Array of objects
 * @returns Returns total width of all objects in the array
 */

function getWidth(w, arr) {
    if (arr.length == 0) return -w / 3;
    else {
        let tWidth = 0;
        arr.forEach(e => tWidth += e.w);

        return -w / 3 - tWidth;
    }

}

// Hvor mange ansikt man ønsker
const totalFaces = 20;

for (let i = 0; i < totalFaces; i++) {
    // Velger hvilket ansikt som skal lages
    const n = Math.floor(Math.random() * 3);

    // Sjekker hvilket ansikt som skal lages
    if (n === 0) {
        // Definerer start bredde og x-verdi
        let w = 201 / 3;
        x = getWidth(w, faces);

        // Lager ansiktet
        const leif = new Face(leifSprite, x, y, w, h);
        // Legger det til arrayet
        faces.push(leif);
    }
    else if (n === 1) {
        w = 161 / 3;
        x = getWidth(w, faces);

        const karo = new Face(karoSprite, x, y, w, h);
        faces.push(karo);
    }
    else if (n === 2) {
        w = 150 / 3;
        x = getWidth(w, faces);

        const shayan = new Face(shayanSprite, x, y, w, h);
        faces.push(shayan);
    }
}

// Setter x-aksen sin y-verdi på canvas
const yFix = y;

// La sirkelen gå dette antallet piksler over og under yFix sin verdi
const range = canvas.height / (5 / 2);

/*
Kalkulerer sinus verdiene utifra angle variabelen.
Ettersom Math.sin() bruker radianer må vi øke vinkelen i små steg --> angleIncrease.
Desto større angleIncrease veriden er, desto kortere blir perioden til sinus grafen.
*/
let angle = 0
const angleIncrease = Math.PI / 100;

/*
Farten til bevegelsen.
1 betyr at x-verdien øker med 1, ergo perioden er 1.
Hvis verdien er 0 ville objektet gått opp og ned på samme plass.
*/
const dx = Math.PI * 2;

function update() {
    // Lager en kopi av vinkelen for å kunne endre på den
    let angleCopy = angle;

    // Looper gjennom alle ansiktene for å tegne de
    faces.forEach(e => {
        e.update(dx, yFix, angleCopy, range);

        // Sender objektet tilbake til start når det går utenfor canvas
        if (e.x > canvas.width + 201 / 3) {
            e.x = -201 / 3;
        }

        // Minker vinkelen til sinus funksjonen for neste ansikt
        angleCopy -= Math.PI / 10;
    });

    // Øker vinkelen
    angle += angleIncrease;
}

function draw() {
    // Fjerner det forrige som ble tegner i canvaset
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tegner bakgrunnsbildet
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    faces.forEach(e => e.draw());
}

/**
 * @description Animerer bevegelsen til objektet
 */

function animate() {
    // Kjører funksjonen for å oppdatere anisktene
    update();
    // Kjører funksjonen for å tegne elementene i animasjonen
    draw();

    // Setter et intervall for animasjonen
    window.setInterval(animate, 1000 / 60);
}

document.getElementById("btn").onclick = function () {
    // Fjerner knappen
    document.getElementById("btn").style.display = "none";

    //Fjerner musepekeren
    document.querySelector("body").style.cursor = "none";

    // Starter musikken
    bgm.play();

    // Starter animerings prosessen
    animate();
};
