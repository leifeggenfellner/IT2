const input = document.getElementById("inputRange");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


input.oninput = () => {
    let radius = input.value;
    console.log(radius);
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

