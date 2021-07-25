/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s === '' && p === '') return true
  let sIdx = 0, pIdx = 0
  for (; pIdx < p.length; pIdx++) {
    let cur = p[pIdx]
    // 处理 .* / a* 情况
    if (pIdx < p.length - 1 && p[pIdx + 1] === '*') {
      // .* 情况
      if (cur === '.') {
        // 如果以 .* 结尾，直接结束
        if (pIdx === p.length - 2) return true
        // 如果 .* 在中间，递归匹配
        else {
          for (; sIdx < s.length; sIdx++) {
            if (isMatch(s.substring(sIdx), p.substring(pIdx + 2))) {
              return true
            }
          }
          if (isMatch(s.substring(sIdx), p.substring(pIdx + 2))) {
            return true
          }
          return false
        }
      }
      else {
        for (; s[sIdx] === cur; sIdx++) {
          if (isMatch(s.substring(sIdx), p.substring(pIdx + 2))) {
            return true
          }
        }
        if (isMatch(s.substring(sIdx), p.substring(pIdx + 2))) {
          return true
        }
      }
      pIdx++
    } else if (cur === '.') {
      if (sIdx < s.length) sIdx++
      else return false
    } else {
      if (s[sIdx] === cur) sIdx++
      else return false;
    }
  }
  return sIdx === s.length
};

export default isMatch