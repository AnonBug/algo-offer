/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const isInt = num => {
    return /^[+-]?\d+$/.test(num)
  }

  // 匹配小数，至少包含一个数字
  const isFloat = num => {
    return /^[+-]?\d*\.\d+$/.test(num) || /^[+-]?\d+\.\d*$/.test(num)
  }

  const isENum = num => {
    const temp = num.split('e')
    if (temp.length > 2) return false
    const [pre, post] = temp
    return (isFloat(pre) || isInt(pre)) && isInt(post)
  }
  // 若干空格
  s = s.trim()
  // 一个 小数 或者 整数
  // （可选）一个 'e' 或 'E' ，后面跟着一个 整数
  s = s.toLocaleLowerCase()
  if (s.includes('e')) {
    return isENum(s)
  } else if (s.includes('.')) {
    return isFloat(s)
  } else {
    return isInt(s)
  }
};

export default isNumber