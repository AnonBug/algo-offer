 import algo from '../src/jz14-2.js';

const testData = [
  [2, 1],
  // [10, 36],
  // [1000, 1549681956], // 大数取余问题
]


testData.forEach((item) => {
  test(`剪绳子 ${item[0]}`, () => {
    expect(algo(item[0]))
      .toBe(item[1]);
  });
})
