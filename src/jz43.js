/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const getCountFromNum = num => {
    let count = 0
    while (num) {
      if (num % 10 === 1) count++
      num = Math.floor(num / 10)
    }
    return count
  }
  let res = 0
  for (let i = 1; i <= n; i++) {
    res += getCountFromNum(i)
  }
  return res
};

export default countDigitOne