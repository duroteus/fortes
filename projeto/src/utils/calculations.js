export const calculateTax = (salary) => {
  if (salary <= 2000.0) return "Isento";

  let tax = 0;
  let remainingSalary = salary;

  if (remainingSalary > 4500.0) {
    tax += (remainingSalary - 4500.0) * 0.28;
    remainingSalary = 4500.0;
  }
  if (remainingSalary > 3000.0) {
    tax += (remainingSalary - 3000.0) * 0.18;
    remainingSalary = 3000.0;
  }
  if (remainingSalary > 2000.0) {
    tax += (remainingSalary - 2000.0) * 0.08;
  }

  return `R$ ${tax.toFixed(2)}`;
};

export const sumNonMultiplesOf13 = (x, y) => {
  let start = Math.min(x, y);
  let end = Math.max(x, y);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 13 !== 0) sum += i;
  }

  return sum;
};

export const vectorSubstitution = (values) => {
  const X = values.slice(0, 10);
  return X.map((value, index) => ({
    index,
    value: value <= 0 ? 1 : value,
  }));
};
