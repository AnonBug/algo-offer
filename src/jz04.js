/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length
  let i = 0, j = n - 1
  while (i < m && j >= 0) {
    const item = matrix[i][j]
    // 命中目标
    if (item === target) return true;
    if (item > target) {
      j--
    } else {
      i++
    }
  }
  return false
};

module.exports = findNumberIn2DArray