/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
  const memo = [1, 1]
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1000000007
  }
  return memo[n]
};

export default numWays