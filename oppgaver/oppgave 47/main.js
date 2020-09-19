let data = new Array();

for (let i = 0; i < 7; i++) {
  data.push(Math.ceil(Math.random() * 8));
}

for (let i = 0; i < data.length; i++) {
  let str = i.toString() + " : ";

  for (let j = 0; j < data[i]; j++) {
    str += "=";
  }

  if (i < data.lenght - 1) {
    str += "\n";
  }

  console.log(str);
}