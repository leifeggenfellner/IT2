const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const btn = document.getElementById("btn");

btn.onclick = () => {
    let throws = parseInt(document.getElementById("throws").value);
    let sidesStr = document.getElementById("sides").value;

    let sides = sidesStr.split(", ");
    let rolls = new Array();

    for (let i = 0; i < throws; i++) {
        rolls.push(sides[Math.floor(Math.random() * sides.length)]);
    }

    let nums = new Array();
    for (let i = 0; i < sides.length; i++) {
        if (!nums.includes(sides[i])) {
            nums.push(sides[i]);
        }
    }

}