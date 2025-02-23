function sumNonMultiplesOf13(x, y) {
  let start = Math.min(x, y);
  let end = Math.max(x, y);

  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }

  return sum;
}

module.exports = { sumNonMultiplesOf13 };
