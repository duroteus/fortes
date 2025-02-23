const { sumNonMultiplesOf13 } = require("../02-multiplos-de-13");

describe("sumNonMultiplesOf13", () => {
  test("should work with numbers in ascending order", () => {
    expect(sumNonMultiplesOf13(100, 200)).toBe(13954);
  });

  test("should work with numbers in descending order", () => {
    expect(sumNonMultiplesOf13(200, 100)).toBe(13954);
  });

  test("should work with small range", () => {
    expect(sumNonMultiplesOf13(10, 20)).toBe(152);
  });

  test("should work with same number", () => {
    expect(sumNonMultiplesOf13(13, 13)).toBe(0);
    expect(sumNonMultiplesOf13(14, 14)).toBe(14);
  });

  test("should work with negative numbers", () => {
    expect(sumNonMultiplesOf13(-10, 10)).toBe(0);
  });
});
