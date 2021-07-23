 import algo from '../src/jz10-1.js';

const map = [
  [2, 1],
  [5, 5],
  [45, 134903163],
  [81, 107920472]
]


map.forEach((item) => {
  test(`斐波那契数列 ${item[0]}`, () => {
    expect(algo(item[0]))
      .toBe(item[1]);
  });
})
