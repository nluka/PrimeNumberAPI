import getClosestPrime from "../getClosestPrime";

describe("getClosestPrime", () => {
  test("export is defined", () => {
    expect(getClosestPrime).toBeDefined();
  });

  describe("should", () => {
    function assert(target: number, expected: number) {
      test(`return ${expected} when target=${target}`, () => {
        expect(getClosestPrime(target)).toBe(expected);
      });
    }
    assert(0, 2);
    assert(1, 2);
    assert(2, 3);
    assert(5, 3);
    assert(8, 7);
    assert(97, 101);
    assert(99.0, 97);
    assert(127_782, 127_781);
    assert(732_835, 732_833);
    assert(999_984, 999_983);
    assert(1_000_000, 999_983);
  });
});
