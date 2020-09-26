for (let c = 0; c < 1000; c++) {
  for (let b = 0; b < 1000; b++) {
    for (let a = 0; a < 1000; a++) {
      if (a < b && b < c && a + b + c === 1000 && a ** 2 + b ** 2 === c ** 2) {
        console.log(a * b * c);
      }
    }
  }
}
