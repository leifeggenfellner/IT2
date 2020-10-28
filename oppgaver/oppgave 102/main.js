const btn = document.getElementById("btn");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = "2";
ctx.strokeStyle = "#000";
for (let i = 0; i < 6; i++) {
    ctx.moveTo((canvas.width / 6) * i, 0);
    ctx.lineTo((canvas.width / 6) * i, canvas.height);
    ctx.moveTo(0, (canvas.height / 6) * i);
    ctx.lineTo(canvas.width, (canvas.height / 6) * i);
}
ctx.stroke();

btn.onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let arr = new Array(6);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(6).fill(0);
    }
    let rolls = parseInt(document.getElementById("rolls").value);


    for (let i = 0; i < rolls; i++) {
        let a = Math.floor(Math.random() * 6);
        let b = Math.floor(Math.random() * 6);

        arr[a][b]++;
    }

    let maxRow = arr.map(function (row) { return Math.max.apply(Math, row); });
    let max = Math.max.apply(null, maxRow);

    let r = 255 / max;

    function draw() {
        ctx.moveTo(0, 0);

        for (let i = 0; i <= arr.length; i++) {
            for (let j = 0; j <= arr[0].length; j++) {
                let w = (canvas.width / 6) * j;
                let h = (canvas.height / 6) * i;
                let sqaure = canvas.height / 6;

                if (i < 6 && j < 6) {
                    ctx.fillStyle = `rgb(${r * arr[i][j]}, 0, ${r * arr[i][j]})`;
                }
                ctx.fillRect(w, h, w + sqaure, h + sqaure);
            }
        }

        ctx.lineWidth = "2";
        ctx.strokeStyle = "#000";
        for (let i = 0; i < 6; i++) {
            ctx.moveTo((canvas.width / 6) * i, 0);
            ctx.lineTo((canvas.width / 6) * i, canvas.height);
            ctx.moveTo(0, (canvas.height / 6) * i);
            ctx.lineTo(canvas.width, (canvas.height / 6) * i);
        }
        ctx.stroke();
    }

    draw();
}
