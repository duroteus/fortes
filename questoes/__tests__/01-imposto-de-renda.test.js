const { calculateTax } = require("../01-imposto-de-renda");

describe("calculateTax", () => {
  test('should return "Isento" for salary <= 2000', () => {
    expect(calculateTax(2000)).toBe("Isento");
    expect(calculateTax(1701.12)).toBe("Isento");
  });

  test("should calculate tax correctly for salary > 2000", () => {
    expect(calculateTax(3002.0)).toBe("R$ 80.36");
    expect(calculateTax(4520.0)).toBe("R$ 355.60");
  });
});
