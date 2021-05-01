const { test, expect } = require('@jest/globals');
const { isNumberPrime, getClosestPrime, getClosestPrimeJsonData } = require('../src/closest');

// isNumberPrime

test('isNumberPrime(number) should return true when number is prime', () => {
  expect(isNumberPrime(7)).toBe(true);
  expect(isNumberPrime(97)).toBe(true);
  expect(isNumberPrime(452377)).toBe(true);
});

test('isNumberPrime(number) should return false when number is not prime', () => {
  expect(isNumberPrime(6)).toBe(false);
  expect(isNumberPrime(95)).toBe(false);
  expect(isNumberPrime(476091)).toBe(false);
});

// getClosestPrime

test('getClosestPrime(target) should return 999983 when target 1000000', () => {
  expect(getClosestPrime(1000000)).toBe(999983);
});

test('getClosestPrime(target) should return 1 when target is 0', () => {
  expect(getClosestPrime(0)).toBe(1);
});

test('getClosestPrime(target) should return nearest prime number if target is already a prime number', () => {
  expect(getClosestPrime(97)).toBe(101);
});

test('getClosestPrime(target) should return 97 when target is 99.0', () => {
  expect(getClosestPrime(99.0)).toBe(97);
});

test('getClosestPrime(target) should throw an exception when target is less than 0', () => {
  expect(() => {
    getClosestPrime(-1);
  }).toThrowError(new Error('target -1 out of bounds ( 0 to 1000000 )'));
});

test('getClosestPrime(target) should throw an exception when target is greater than 1000000', () => {
  expect(() => {
    getClosestPrime(1000001);
  }).toThrowError(new Error('target 1000001 out of bounds ( 0 to 1000000 )'));
});

test('getClosestPrime(target) should throw an exception when target is a decimal', () => {
  expect(() => {
    getClosestPrime(99.5);
  }).toThrowError(new Error('target 99.5 is a decimal'));
  expect(() => {
    getClosestPrime(999.3455);
  }).toThrowError(new Error('target 999.3455 is a decimal'));
});

test('getClosestPrime(target) should throw an exception when target is not a number', () => {
  expect(() => {
    getClosestPrime('hello');
  }).toThrowError(new Error('target hello is not a number'));
});

// getClosestPrimeJsonData

test('getClosestPrimeJsonData(target) should return 999983 when target 1000000', () => {
  const testParams = {
    target: 1000000
  };
  expect(getClosestPrimeJsonData(testParams)).toEqual({ closestPrime: 999983 });
});

test('getClosestPrimeJsonData(target) should return 1 when target is 0', () => {
  const testParams = {
    target: 0
  };
  expect(getClosestPrimeJsonData(testParams)).toEqual({ closestPrime: 1 });
});

test('getClosestPrimeJsonData(target) should return nearest prime number if target is already a prime number', () => {
  const testParams = {
    target: 97
  };
  expect(getClosestPrimeJsonData(testParams)).toEqual({ closestPrime: 101 });
});

test('getClosestPrimeJsonData(target) should return 97 when target is 99.0', () => {
  const testParams = {
    target: 99.0
  };
  expect(getClosestPrimeJsonData(testParams)).toEqual({ closestPrime: 97 });
});

test('getClosestPrimeJsonData(target) should throw an exception when target is less than 0', () => {
  const testParams = {
    target: -1
  };
  expect(() => {
    getClosestPrimeJsonData(testParams);
  }).toThrowError(new Error('target -1 out of bounds ( 0 to 1000000 )'));
});

test('getClosestPrimeJsonData(target) should throw an exception when target is greater than 1000000', () => {
  const testParams = {
    target: 1000001
  };
  expect(() => {
    getClosestPrimeJsonData(testParams);
  }).toThrowError(new Error('target 1000001 out of bounds ( 0 to 1000000 )'));
});

test('getClosestPrimeJsonData(target) should throw an exception when target is a decimal', () => {
  const testParams = {
    target: 99.54
  };
  expect(() => {
    getClosestPrimeJsonData(testParams);
  }).toThrowError(new Error('target 99.54 is a decimal'));
});

test('getClosestPrimeJsonData(target) should throw an exception when target is not a number', () => {
  const testParams = {
    target: 'hello'
  };
  expect(() => {
    getClosestPrimeJsonData(testParams);
  }).toThrowError(new Error('target hello is not a number'));
});
