const primeNumbers = require('./primeNumbers');

const primeNumberList = primeNumbers.primeNumber;

function isNumberPrime(number) {
  for (let y = 0; y <= primeNumberList.length; y++) {
    if (primeNumberList[y] > number / 2) {
      return true;
    }
    if (number % primeNumberList[y] === 0) {
      return false;
    }
  }
  return false;
}

function getClosestPrime(target) {
  if (typeof target !== 'number') {
    throw new Error(`target ${target} is not a number`);
  }
  if (target % 1 !== 0) {
    throw new Error(`target ${target} is a decimal`);
  }
  if (target > 1000000 || target < 0) {
    throw new Error(`target ${target} out of bounds ( 0 to 1000000 )`);
  }
  let increment = 0;
  while (true) {
    increment++;
    if (isNumberPrime(target - increment) && target - increment > 0) {
      return target - increment;
    }
    if (isNumberPrime(target + increment) && target + increment < 1000000) {
      return target + increment;
    }
  }
}

function getClosestPrimeJsonData(queryParams) {
  // if queryParams.target is not valid (undefined or out of rage), an error should be thrown
  return {
    closestPrime: getClosestPrime(queryParams.target)
  };
}

module.exports.getClosestPrime = getClosestPrime;
module.exports.isNumberPrime = isNumberPrime;
module.exports.getClosestPrimeJsonData = getClosestPrimeJsonData;
