const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const generate = (str) => {
    let newStr = new String();
    for (char of str) {
        if (char === "F") newStr += "F[+F]F[-F]F";
    }
    return newStr;
}

const length = 0.3;
const gens = 5;
let theta = 25.7 * Math.PI / 180;

const draw = str => {
    const stack = new Array();
    const dVector = new Vector2d(0, -1);
    const pVector = new Vector2d(canvas.width / 2, canvas.height);
    for (char of str) {
        if (char === "F") {
            ctx.beginPath();
            ctx.moveTo(pVector.x, pVector.y);
            ctx.lineWidth = 2;
            dVector.scaleVec(length);
            pVector.add(dVector);
            console.log(dVector);
            dVector.div(length);
            ctx.lineTo(pVector.x, pVector.y);
            ctx.stroke();
            ctx.closePath();
        } else if (char === "[") {
            stack.push({ pos: pVector.clone(), dir: dVector.clone() });
        } else if (char === "]") {
            const obj = stack.pop();
            pVector.x = obj.pos.x;
            pVector.y = obj.pos.y;
            dVector.x = obj.dir.x;
            dVector.y = obj.dir.y;
        } else if (char === "-") {
            dVector.rotate(theta);
            console.log(dVector);
        } else if (char === "+") {
            dVector.rotate(-theta);
            console.log(dVector);
        }
    }
}

let treeString = "F";
for (let i = 0; i < gens; i++) treeString += generate(treeString);

draw(treeString);