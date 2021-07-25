/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const dfs = (i, j) => {
    if (i < 0 || i === m || j < 0 || j === n || visited[i][j]) return;
    if (canIn(i, j)) {
      visited[i][j] = true
      count++
      dfs(i - 1, j)
      dfs(i, j - 1)
      dfs(i + 1, j)
      dfs(i, j + 1)
    }
  }

  const canIn = (i, j) => {
    let num = 0
    while (Math.floor(i / 10)) {
      num += i % 10
      i = Math.floor(i / 10)
    }
    num += i
    while (Math.floor(j / 10)) {
      num += j % 10
      j = Math.floor(j / 10)
    }
    num += j
    return num <= k
  }

  const visited = new Array(m).fill(0).map(item => new Array(n))

  let count = 0
  dfs(0, 0)
  return count
};

export default movingCount