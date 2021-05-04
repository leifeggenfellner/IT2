import Person from "./person.js";
import {getDistance} from "./functions.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const genders = new Array("Male", "Female", "Both");
const people = new Array();

for (let i = 0; i < 1000; i++) people.push(new Person(genders[i % 2], parseInt((Math.random() * 12) + 18), genders[Math.floor(Math.random() * 3)]));

const position = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

const closestPeople = new Array();
const closestDist = new Array();

closestPeople[0] = people[0];

for (let i = 1; i < 20; i++) {
    for (let j = 0; j < closestPeople.length; j++) {
        if (getDistance(position.x, position.y, people[i].position.x, people[i].position.y) < getDistance(position.x, position.y, closestPeople[j].position.x, closestPeople[j].position.y)) {
            closestPeople.splice(j, 0, people[i]);
            break;
        }
    }
    if (closestPeople[i] == undefined) closestPeople.push(people[i]);
}

for (let i = 20; i < people.length; i++) {
    if (getDistance(position.x, position.y, people[i].position.x, people[i].position.y) < getDistance(position.x, position.y, closestPeople[19].position.x, closestPeople[19].position.y)) {
        for (let j = 0; j < 20; j++) {
            if (getDistance(position.x, position.y, people[i].position.x, people[i].position.y) < getDistance(position.x, position.y, closestPeople[j].position.x, closestPeople[j].position.y)) {
                closestPeople.splice(j, 0, people[i]);
                closestPeople.pop();
                break;
            }
        }
    }
}

for (let i = 0; i < 20; i++) {
    closestDist[i] = getDistance(position.x, position.y, people[i].position.x, people[i].position.y);
}

closestDist.sort();

for (let i = 20; i < people.length; i++) {
    if (getDistance(position.x, position.y, people[i].position.x, people[i].position.y) < closestDist[19]) {
        for (let j = 0; j < 20; j++) {
            if (getDistance(position.x, position.y, people[i].position.x, people[i].position.y) < closestDist[j]) {
                closestDist.splice(j, 0, getDistance(position.x, position.y, people[i].position.x, people[i].position.y));
                closestDist.pop();
                break;
            }
        }
    }
}

const output = document.createElement("p");
let node = document.createTextNode('People closest to you:');
output.appendChild(node);
const br = document.createElement("br");
output.appendChild(br);

for (let i = 0; i < closestPeople.length; i++) {
    let node = document.createTextNode(`${i + 1}. Gender: ${closestPeople[i].gender}, Seeking: ${closestPeople[i].seeking}, Distance: ${closestDist[i]} km`);
    output.appendChild(node);
    let newLine = document.createElement("br");
    output.appendChild(newLine);
}

document.querySelector("body").appendChild(output);

const r = 5;

ctx.beginPath();
ctx.arc((canvas.width / 2) - (r / 2), (canvas.height / 2) - (r / 2), r, 0, 2 * Math.PI, false);
ctx.closePath();

for (let i = 0; i < people.length; i++) {
    ctx.arc(people[i].position.x - (r/4), people[i].position.y - (r/4), r / 2, 0, 2* Math.PI, false);
    ctx.closePath();
}
ctx.fillStyle = "#000";
ctx.fill();

ctx.beginPath();
for( let i = 0; i < closestPeople.length; i++) {
    ctx.arc(closestPeople[i].position.x - (r/4), closestPeople[i].position.y - (r/4), r / 2, 0, 2* Math.PI, false);
    ctx.closePath();
}

ctx.fillStyle = "#00F";
ctx.fill();