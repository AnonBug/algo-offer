 import algo from '../src/jz11.js';

const map = [
  [[3,4,5,1,2], 1],
  [[2,2,2,0,1], 0],
  [[2, 2, 2, 2, 2, 2], 2],
  [[1, 2, 3, 4, 5], 1],
  [[], undefined]
]


map.forEach((item) => {
  test(`旋转数组的最小数字 ${item[0]}`, () => {
    expect(algo(item[0]))
      .toBe(item[1]);
  });
})
