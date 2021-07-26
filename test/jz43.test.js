import algo from '../src/jz43'

const testData = [
  [12, 5],
  [13, 6],
  // [824883294, 123],
]

testData.forEach((item) => {
  test(`1 ~ ${item[0]} 中 1 出现的次数`, () => {
    expect(algo(item[0]))
      .toBe(item[1]);
  });
})
