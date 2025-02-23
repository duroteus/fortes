function sumNonMultiplesOf13(x, y) {
  let start = Math.min(x, y);
  console.log(start);
  let end = Math.max(x, y);
  console.log(end);

  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumNonMultiplesOf13(100, 200));
console.log(sumNonMultiplesOf13(200, 100));
