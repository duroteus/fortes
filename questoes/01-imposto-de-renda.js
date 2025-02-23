function calculateTax(salary) {
  if (salary <= 2000.0) {
    return "Isento";
  }

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
}

module.exports = { calculateTax };
