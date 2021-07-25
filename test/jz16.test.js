import algo from '../src/jz16'

const testData = [
  [2.000, 10, 1024.000],
  // [2.1, 3, 9.26100],
  // [2, -2, 0.25],
  // [2.00000, -2147483648]
]


testData.forEach((item) => {
  test(`数字 ${item[0]} 的 ${item[1]} 次方`, () => {
    expect(algo(item[0], item[1]))
      .toBe(item[2]);
  });
})
