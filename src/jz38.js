/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const len = s.length
  const dfs = (str) => {
    if (str.length === len) {
      res.push(str)
      return;
    }
    if (set.has(str)) return;
    set.add(str)
    for (let i = 0; i < len; i++) {
      if (!visited[i]) {
        visited[i] = true
        dfs(str + s[i], visited)
        visited[i] = false
      }
    }
  }

  const set = new Set()
  const res = []
  const visited = new Array(len).fill(false)
  
  for (let i = 0; i < len; i++) {
    visited[i] = true
    dfs(s[i])
    visited[i] = false
  }

  return res
};

export default permutation
