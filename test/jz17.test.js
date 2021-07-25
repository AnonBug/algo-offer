import algo from '../src/jz17'

const testData = [
  [1, [1, 2, 3, 4, 5, 6, 7, 8, 9]]
]


testData.forEach((item) => {
  test(`从 1 到最大的 ${item[0]} 位数`, () => {
    expect(algo(item[0]))
      .toEqual(item[1]);
  });
})
