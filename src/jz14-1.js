/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  /* 
    动态规划：
  */
  const dp = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    let max = i - 1
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      max = Math.max(max, Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]))
    }
    dp[i] = max
  }
  return dp[n]
};

export default cuttingRope