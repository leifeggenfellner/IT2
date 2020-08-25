"use strict";
const submit = document.getElementById("submit");
let txt = document.getElementById("txt");
let num;
let sum;

submit.onclick = () => {
  sum = 1;
  num = document.getElementById("num").value;

  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  txt.innerHTML = sum;
};
