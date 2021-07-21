const findNumberIn2DArray = require('../src/jz04')
const matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

const map = {
  5: true,
  20: false
}

for (let [key, value] of Object.entries(map)) {
  test(`二维数组中${value ? '' : '不'}包含数字 ${key}`, () => {
    expect(findNumberIn2DArray(matrix, Number(key))).toBe(value);
  });
}

// findNumberIn2DArray(matrix, 5)