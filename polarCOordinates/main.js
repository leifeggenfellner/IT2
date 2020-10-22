const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const originX = width / 2;
const originY = height / 2;

const dots = 60;
let interval = (2 * Math.PI) / dots;

const update = () => {
    // Calculations

    // Radius
    let r = width / 2;
    let rS = (width / 2) * 0.85;
    let rM = (width / 2) * 0.80;
    let rH = (width / 2) * 0.65;

    // Get time
    let d = new Date();

    // Seconds
    let secs = d.getSeconds() + d.getMilliseconds() / 1000;
    let secsAngle = (secs / 60) * 2 * Math.PI - Math.PI / 2;
    let secsX = originX + rS * Math.cos(secsAngle);
    let secsY = originY + rS * Math.sin(secsAngle);

    // Minutes
    let mins = d.getMinutes() + d.getSeconds() / 60 + d.getMilliseconds() / 60000;
    let minsAngle = (mins / 60) * 2 * Math.PI - Math.PI / 2;
    let minsX = originX + rM * Math.cos(minsAngle);
    let minsY = originY + rM * Math.sin(minsAngle);

    // Hours
    let hours = d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 360 + d.getMilliseconds() / 360000;
    let hoursAngle = (hours / 12) * 2 * Math.PI - Math.PI / 2;
    let hoursX = originX + rH * Math.cos(hoursAngle);
    let hoursY = originY + rH * Math.sin(hoursAngle);

    // Draw
    ctx.clearRect(0, 0, width, height);

    // Draw Circle Outline
    for (let i = 0; i < dots; i++) {
        let rAngle = interval * i;

        let xC = originX + r * 0.95 * Math.cos(rAngle);
        let yC = originY + r * 0.95 * Math.sin(rAngle);

        let x1 = originX + r * 0.93 * Math.cos(rAngle);
        let y1 = originY + r * 0.93 * Math.sin(rAngle);
        let x2 = originX + r * 0.96 * Math.cos(rAngle);
        let y2 = originY + r * 0.96 * Math.sin(rAngle);

        if (i % 5 === 0) {
            ctx.beginPath();
            ctx.arc(xC, yC, r * 0.02, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        } else if (!i % 5 === 0) {
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
        }

    }

    // Circle In Center
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(originX, originY, 2, 0, 2 * Math.PI);
    ctx.fill();


    // Draw Seconds
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(secsX, secsY);
    ctx.strokeStyle = "#F00";
    ctx.closePath();
    ctx.stroke();

    // Draw Minutes
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(minsX, minsY);
    ctx.strokeStyle = "#000";
    ctx.closePath();
    ctx.stroke();

    // Draw Hours
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(hoursX, hoursY);
    ctx.strokeStyle = "#000";
    ctx.closePath();
    ctx.stroke();

    requestAnimationFrame(update);
}

update();


