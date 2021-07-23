/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length, n = board[0].length
  const visited = new Array(m).fill(0).map(item => new Array(n).fill(false))
  let index = 0

  const dfs = (i, j) => {
    if (i < 0 || i === m || j < 0 || j === n || visited[i][j]) return false;
    if (board[i][j] === word[index]) {
      visited[i][j] = true
      index++
      if (index === word.length) return true;
      if (!dfs(i - 1, j) && !dfs(i, j - 1) && !dfs(i + 1, j) && !dfs(i, j + 1)) {
        index--
        visited[i][j] = false
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j)) {
        return true
      }
    }
  }
  return false
};

export default exist