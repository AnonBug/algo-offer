const findRepeatNumber = require('../src/jz03');


const data = [
  [2, 3, 1, 0, 2, 5, 3],
  [1, 2, 3, 3, 0]
]

const res = [
  [2, 3],
  [3]
]

data.forEach((item, index) => {
  test(`从数组 ${item} 中查找重复数字 ${res[index]}`, () => {
    expect(res[index]).toContain(findRepeatNumber(item));
  });
})
