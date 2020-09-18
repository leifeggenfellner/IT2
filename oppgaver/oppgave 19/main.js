let str = "";

for (i = 10; i > 0; i--) {
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
