const board = (size) => {
  let output = "";
  for (let i = 0; i < size; i++) {
    output += i % 2 === 0 ? "* " : " ";
    for (let j = 0; j < size * 2; j++) {
      output += j % 2 === 0 ? "* " : "";
    }
    output += i !== size - 1 ? "\n" : "";
  }
  return output;
};
