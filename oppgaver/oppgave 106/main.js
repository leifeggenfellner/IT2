
let colorCube16 = new Array(16);
let r, g, b;

for (let i = 0; i < colorCube16.length; i++) {
    colorCube16[i] = new Array(16);
    for (let j = 0; j < colorCube16[i].length; j++) {
        colorCube16[i][j] = new Array(16);
        for (let k = 0; k < colorCube16[i][j].length; k++) {
            r = (255 / 15) * i;
            g = (255 / 15) * j;
            b = (255 / 15) * k;
            colorCube16[i][j][k] = `rgb(${r}, ${g}, ${b})`;
        }
    }
}

console.log(colorCube16);