function getRandomPrimes(count, min, max) {}

module.exports.getRandomPrimesJsonData = function getRandomPrimesJsonData(queryParams) {
  const DEFAULT_COUNT = 1;
  const DEFAULT_MIN = 1;
  const DEFAULT_MAX = 1_000_000;

  const count = queryParams.count !== undefined ? queryParams.count : DEFAULT_COUNT;
  const min = queryParams.min !== undefined ? queryParams.min : DEFAULT_MIN;
  const max = queryParams.max !== undefined ? queryParams.max : DEFAULT_MAX;

  return {
    randomPrimes: getRandomPrimes()
  };
};
