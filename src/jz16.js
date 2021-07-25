/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0
  if (n === 0) return 1
  if (n < 0) {
    n = -n
    x = 1 / x
  }
  // while (n) {
  //   res *= x
  //   n--
  // }
  const fn = (x, n) => {
    if (n === 0) return 1
    if (n === 1) return x
    /* 优化点：使用二分法使时间复杂度降至 log(n) */
    let res = fn(x, Math.floor(n / 2))
    res *= res
    if (n & 1 === 1) res *= x
    return res
  }
  // return Number(res.toFixed(10))
  return fn(x, n)
};

export default myPow