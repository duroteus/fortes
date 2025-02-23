const { vectorSubstitution } = require("../03-substituicao-em-vetor-i");

describe("vectorSubstitution", () => {
  test("should replace negative and zero values with 1 and format output", () => {
    const input = [1, -5, 0, -3, 9, 8, -7, 4, 2, -1];
    const result = vectorSubstitution(input);

    expect(result).toEqual([1, 1, 1, 1, 9, 8, 1, 4, 2, 1]);
  });

  test("should handle exactly 10 values", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(vectorSubstitution(input).length).toBe(10);
  });

  test("should handle array with all negative or zero values", () => {
    const input = [-1, -2, 0, -4, -5, -6, 0, -8, -9, -10];
    expect(vectorSubstitution(input)).toEqual(Array(10).fill(1));
  });

  test("should handle array with all positive numbers", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(vectorSubstitution(input)).toEqual(input);
  });

  test("should handle array with all negative numbers", () => {
    const input = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    const expected = Array(10).fill(1);
    expect(vectorSubstitution(input)).toEqual(expected);
  });

  test("should handle array with all zeros", () => {
    const input = Array(10).fill(0);
    const expected = Array(10).fill(1);
    expect(vectorSubstitution(input)).toEqual(expected);
  });

  test("should take only first 10 elements if array is longer", () => {
    const input = [1, -5, 0, -3, 9, 8, -7, 4, 2, -1, 11, 12, 13];
    const expected = [1, 1, 1, 1, 9, 8, 1, 4, 2, 1];
    expect(vectorSubstitution(input)).toEqual(expected);
  });
});
