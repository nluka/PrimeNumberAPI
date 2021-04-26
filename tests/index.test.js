const { test, expect } = require('@jest/globals');
const index = require('../src/index.js');
const testFunction = index.testFunction;

test('testFunction() should return 0', () => {
  expect(testFunction()).toBe(0);
});
