 import algo from '../src/jz14-1.js';

const testData = [
  [2, 1],
  // [10, 36],
  // [58, 1549681956]
]


testData.forEach((item) => {
  test(`剪绳子 ${item[0]}`, () => {
    expect(algo(item[0]))
      .toBe(item[1]);
  });
})
