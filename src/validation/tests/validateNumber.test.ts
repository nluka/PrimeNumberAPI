import validateNumber from "../validateNumber";

describe("validateNumber", () => {
  test("export is defined", () => {
    expect(validateNumber).toBeDefined();
  });

  describe("should", () => {
    function assertRangeError(target: any) {
      test(`return RangeError when target=${JSON.stringify(target)}`, () => {
        const result = validateNumber(target);
        expect(result).toBeInstanceOf(RangeError);
      });
    }
    assertRangeError("-100");
    assertRangeError("-1");
    assertRangeError("1000001");
    assertRangeError("2000000");

    function assertTypeError(target: any) {
      test(`return TypeError when target=${JSON.stringify(target)}`, () => {
        const result = validateNumber(target);
        expect(result).toBeInstanceOf(TypeError);
      });
    }
    assertTypeError(true);
    assertTypeError("true");
    assertTypeError(false);
    assertTypeError("false");
    assertTypeError(null);
    assertTypeError("null");
    assertTypeError(undefined);
    assertTypeError("undefined");
    assertTypeError("invalid");
    assertTypeError({});
    assertTypeError("{}");
    assertTypeError([]);
    assertTypeError("[]");
  });
});
