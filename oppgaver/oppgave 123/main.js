// class Stack {
//     constructor() {
//         this.elements = [];
//     }

//     push(e) {
//         this.elements.push(e);
//     }

//     pop() {
//         return this.elements.length === 0 ? "Underflow" : this.elements.pop()
//     }

//     peek() {
//         return this.elements[this.elements.length - 1];
//     }

//     isEmpty() {
//         return this.elements.length === 0;
//     }

//     printStack() {
//         let str = "";
//         for (let e of this.elements) str += `${e} `;
//         return str;
//     }
// }

// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// canvas.width = 800;
// canvas.height = 400;

// const stickWidth = 20;
// const stickHeight = 400;
// const objects = prompt("Number of objects to play with, max 9");

// function draw() {
//     ctx.beginPath();
//     for (let i = 0; i <= 3; i++) {
//         ctx.fillRect((canvas.width / 3) * i - (stickWidth / 2) + canvas.width / 6, canvas.height - stickHeight, stickWidth, stickHeight);
//     }
//     ctx.fillRect(0, canvas.height - stickWidth, canvas.width, stickWidth);

//     ctx.closePath();
// }

// if (objects == null || objects === "") alert("Invalid, page couldn't load");
// else {
//     draw();
// }

const moves = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += 2 ** i - 1;
    return sum;
}