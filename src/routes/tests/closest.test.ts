import request from "supertest";
import app from "../../app";

const ROUTE = "/closest";

describe(ROUTE, () => {
  describe("GET", () => {
    function assertSuccess(target: number, expected: number) {
      test(`should succeed when target=${target}`, async () => {
        await request(app)
          .get(`${ROUTE}?target=${target}`)
          .expect((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body.target).toBe(target);
            expect(res.body.closest).toBe(expected);
          });
      });
    }
    assertSuccess(0, 2);
    assertSuccess(1, 2);
    assertSuccess(2, 3);
    assertSuccess(5, 3);
    assertSuccess(8, 7);
    assertSuccess(97, 101);
    assertSuccess(99.0, 97);
    assertSuccess(127_782, 127_781);
    assertSuccess(732_835, 732_833);
    assertSuccess(999_984, 999_983);
    assertSuccess(1_000_000, 999_983);

    function assertFailureTypeError(target: any) {
      test(`should fail when target=${target}`, async () => {
        await request(app)
          .get(`${ROUTE}?target=${target}`)
          .expect((res) => {
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toBeDefined();
            expect(res.body.message).toMatch(/failed to parse target/);
          });
      });
    }
    assertFailureTypeError(true);
    assertFailureTypeError("true");
    assertFailureTypeError(false);
    assertFailureTypeError("false");
    assertFailureTypeError(null);
    assertFailureTypeError("null");
    assertFailureTypeError(undefined);
    assertFailureTypeError("undefined");
    assertFailureTypeError("invalid");
    assertFailureTypeError({});
    assertFailureTypeError("{}");
    assertFailureTypeError([]);
    assertFailureTypeError("[]");

    function assertFailureRangeError(target: number) {
      test(`should fail when target=${target}`, async () => {
        await request(app)
          .get(`${ROUTE}?target=${target}`)
          .expect((res) => {
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toBeDefined();
            expect(res.body.message).toMatch(/not in range/);
          });
      });
    }
    assertFailureRangeError(-100);
    assertFailureRangeError(-1);
    assertFailureRangeError(1000001);
    assertFailureRangeError(2000000);
  });
});
