const primeNumbersJs = require('./primeNumbers.js');

const primeNums = primeNumbersJs.primeNumbers;

function isNumberPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 0; i < primeNums.length; i++) {
    if (primeNums[i] > number / 2) {
      return true;
    }
    if (number % primeNums[i] === 0) {
      return false;
    }
  }
  return false;
}

function getClosestPrime(target) {
  const validTargetTypes = ['number', 'string'];
  if (!validTargetTypes.includes(typeof target)) {
    throw new TypeError(`expected typeof target to be 'number' or 'string', but got '${typeof target}' instead`);
  }

  const targetNumber = parseFloat(target);

  if (Number.isNaN(targetNumber)) {
    throw new TypeError(`target '${target}' evaluated to NaN`);
  }
  if (targetNumber % 1 !== 0) {
    throw new Error(`target '${targetNumber}' is a non-whole decimal value`);
  }
  if (targetNumber > 1_000_000 || targetNumber < 0) {
    throw new RangeError(`target '${targetNumber}' is not in range 0-1,000,000`);
  }

  let i = 0;
  while (true) {
    i++;
    if (isNumberPrime(targetNumber - i) && targetNumber - i > 0) {
      return targetNumber - i;
    }
    if (isNumberPrime(targetNumber + i) && targetNumber + i < 1_000_000) {
      return targetNumber + i;
    }
  }
}

function getClosestPrimeJsonData(queryParams) {
  return {
    closestPrime: getClosestPrime(queryParams.target)
  };
}

module.exports.isNumberPrime = isNumberPrime;
module.exports.getClosestPrime = getClosestPrime;
module.exports.getClosestPrimeJsonData = getClosestPrimeJsonData;
