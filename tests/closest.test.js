const { test, expect } = require('@jest/globals');
const { isNumberPrime, getClosestPrime, getClosestPrimeJsonData } = require('../src/closest');

// #region isNumberPrime tests

test('0. isNumberPrime(number) should return true when `number` is prime and greater than 0', () => {
  const primeNumbers = [7, 97, 452_377];
  for (let i = 0; i < primeNumbers.length; i++) {
    expect(isNumberPrime(primeNumbers[i])).toBe(true);
  }
});

test('1. isNumberPrime(number) should return false when `number` is not prime and greater than 0', () => {
  const nonPrimeNumbers = [6, 100, 400_000];
  for (let i = 0; i < nonPrimeNumbers.length; i++) {
    expect(isNumberPrime(nonPrimeNumbers[i])).toBe(false);
  }
});

test('2. isNumberPrime(number) should return false when `number` is less than 0', () => {
  const invalidNumber = -1;
  expect(isNumberPrime(invalidNumber)).toBe(false);
});

// #endregion

// #region getClosestPrime tests

test('3. getClosestPrime(target) should return the nearest prime number when `target` is valid', () => {
  const validTargetsAndTheirClosestPrime = [
    {
      target: 8,
      closestPrime: 7
    },
    {
      target: 127_782,
      closestPrime: 127_781
    },
    {
      target: 732_835,
      closestPrime: 732_833
    }
  ];
  for (let i = 0; i < validTargetsAndTheirClosestPrime.length; i++) {
    expect(getClosestPrime(validTargetsAndTheirClosestPrime[i].target)).toBe(
      validTargetsAndTheirClosestPrime[i].closestPrime
    );
  }
});

test('4. getClosestPrime(target) should return smaller nearest prime number when `target` has 2 equidistant primes and is valid', () => {
  const target = 5;
  const smallerEquidistantPrime = 3; // largerEquidistantPrime = 7
  expect(getClosestPrime(target)).toBe(smallerEquidistantPrime);
});

test('5. getClosestPrime(target) should return the nearest prime when `target` contains decimals but is still a whole number', () => {
  expect(getClosestPrime(99.0)).toBe(97);
});

test('6. getClosestPrime(target) should return the nearest prime to `target` if it is a prime number', () => {
  const primeTarget = 97;
  const nearestPrime = 101;
  expect(getClosestPrime(primeTarget) !== primeTarget);
  expect(getClosestPrime(primeTarget)).toBe(nearestPrime);
});

test('7. getClosestPrime(target) should return 999,983 when `target` is greater than the last prime number under 1,000,000', () => {
  expect(getClosestPrime(999_984)).toBe(999_983);
  expect(getClosestPrime(1_000_000)).toBe(999_983);
});

test('8. getClosestPrime(target) should return 2 when `target` is 0', () => {
  expect(getClosestPrime(0)).toBe(2);
});

test('9. getClosestPrime(target) should throw an error when `target` is less than 0', () => {
  const invalidTarget = -1;
  expect(() => {
    getClosestPrime(invalidTarget);
  }).toThrowError(new RangeError(`target '${invalidTarget}' is not in range 0-1,000,000`));
});

test('10. getClosestPrime(target) should throw a RangeError when `target` is greater than 1,000,000', () => {
  const invalidTarget = 1_000_001;
  expect(() => {
    getClosestPrime(invalidTarget);
  }).toThrowError(new RangeError(`target '${invalidTarget}' is not in range 0-1,000,000`));
});

test('11. getClosestPrime(target) should throw an Error when target is a non-whole decimal', () => {
  const nonWholeDecimalTarget = 99.5;
  const expectedError = new Error(`target '${nonWholeDecimalTarget}' is a non-whole decimal value`);
  expect(() => {
    getClosestPrime(nonWholeDecimalTarget);
  }).toThrowError(expectedError);
});

test('12. getClosestPrime(target) should throw a TypeError when `target` is not of type "string"', () => {
  const invalidTarget = null;
  const expectedError = new TypeError(
    `expected typeof target to be 'number' or 'string', but got '${typeof invalidTarget}' instead`
  );
  expect(() => {
    getClosestPrime(invalidTarget);
  }).toThrowError(expectedError);
});

test('13. getClosestPrime(target) should throw a TypeError when `target` is of type "string" but gets parsed as NaN', () => {
  const invalidStringTarget = 'hello';
  const expectedError = new TypeError(`target '${invalidStringTarget}' evaluated to NaN`);
  expect(() => {
    getClosestPrime(invalidStringTarget);
  }).toThrowError(expectedError);
});

// #endregion

// #region getClosestPrimeJsonData tests

test('14. getClosestPrimeJsonData(target) should return an object containing the field `closestPrime` when target is valid', () => {
  const queryParams = {
    target: 7
  };
  const closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
});

test('15. getClosestPrimeJsonData(target) should return smaller nearest prime number as JSON when `target` has 2 equidistant primes and is valid', () => {
  const queryParams = {
    target: 5
  };
  const closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField).toBe(3);
});

test('16. getClosestPrimeJsonData(target) should return the nearest prime as JSON when `target` contains decimals but is still a whole number', () => {
  const queryParams = {
    target: 99.0
  };
  const closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField).toBe(97);
});

test('17. getClosestPrimeJsonData(target) should return the nearest prime to `target` and not `target` itself as JSON if it is a prime number', () => {
  const queryParams = {
    target: 97
  };
  const closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField !== queryParams.target).toBe(true);
  expect(closestPrimeField).toBe(101);
});

test('18. getClosestPrimeJsonData(target) should return 999,983 as JSON when `target` as JSON is greater than the last prime number under 1,000,000', () => {
  let queryParams = {
    target: 999_984
  };
  let closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField).toBe(999_983);

  queryParams = {
    target: 1_000_000
  };
  closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField).toBe(999_983);
});

test('19. getClosestPrimeJsonData() should return 2 as JSON when `target` is less than 2 but greater than -1', () => {
  let queryParams = {
    target: 0
  };
  let closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField).toBe(2);

  queryParams = {
    target: 1
  };
  closestPrimeField = getClosestPrimeJsonData(queryParams).closestPrime;
  expect(closestPrimeField).toBeDefined();
  expect(closestPrimeField).toBe(2);
});

// #endregion
