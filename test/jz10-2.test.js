 import algo from '../src/jz10-2.js';

const map = [
  [0, 1],
  [2, 2],
  [7, 21],
]


map.forEach((item) => {
  test(`青蛙跳台阶 ${item[0]}`, () => {
    expect(algo(item[0]))
      .toBe(item[1]);
  });
})
