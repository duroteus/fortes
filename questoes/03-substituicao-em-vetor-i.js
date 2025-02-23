function vectorSubstitution(values) {
  const X = values.slice(0, 10);

  for (let i = 0; i < X.length; i++) {
    if (X[i] <= 0) {
      X[i] = 1;
    }
    console.log(`X[${i}] = ${X[i]}`);
  }
}

const numbers = [1, -5, 0, -3, 9, 8, -7, 4, 2, -1];
vectorSubstitution(numbers);
