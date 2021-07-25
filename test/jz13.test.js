 import algo from '../src/jz13.js';

const map = [
  [2, 3, 1, 3],
  [3, 1, 0, 1],
  [100, 100, 20, 6117],
  [1, 1, 0, 1]
]


map.forEach((item) => {
  test(`矩阵 ${item[0]} 中的路径 ${item[1]}`, () => {
    expect(algo(item[0], item[1], item[2]))
      .toBe(item[3]);
  });
})
