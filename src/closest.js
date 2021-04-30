function getClosestPrime(target) {}

module.exports.getClosestPrimeJsonData = function getClosestPrimeJsonData(queryParams) {
  // if queryParams.target is not valid (undefined or out of rage), an error should be thrown

  return {
    closestPrime: getClosestPrime(queryParams.target)
  };
};
