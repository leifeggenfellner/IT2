const select = document.getElementById("converter");
const input = document.getElementById("inputField");
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

select.style.margin = "0px 0px 5px 0px";

btn.onclick = function () {
  let selected = select.value;
  let ans = parseFloat(input.value);
  let x;

  if (selected == "cm_tommer") {
    x = ans / 2.54;
    txt.innerHTML = x.toFixed(3);
  } else if (selected == "tommer_cm") {
    x = ans * 2.54;
    txt.innerHTML = x.toFixed(3);
  } else if (selected == "km_miles") {
    x = ans / 1.609;
    txt.innerHTML = x.toFixed(3);
  } else if (selected == "miles_km") {
    x = ans * 1.609;
    txt.innerHTML = x.toFixed(3);
  } else if (selected == "kr_euro") {
    x = ans / 10.53;
    txt.innerHTML = x.toFixed(3);
  } else if (selected == "euro_kr") {
    x = ans * 10.53;
    txt.innerHTML = x.toFixed(3);
  }
};
