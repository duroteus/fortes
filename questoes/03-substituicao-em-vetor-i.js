function vectorSubstitution(values) {
  const x = values.slice(0, 10);

  for (let i = 0; i < x.length; i++) {
    if (x[i] <= 0) {
      x[i] = 1;
    }
    console.log(`X[${i}] = ${x[i]}`);
  }

  return x;
}

const numbers = [1, -5, 0, -3, 9, 8, -7, 4, 2, -1];
console.log(vectorSubstitution(numbers));

module.exports = { vectorSubstitution };
