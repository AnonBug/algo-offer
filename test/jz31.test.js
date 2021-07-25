import algo from '../src/jz31'

const testData = [
  [[1, 2, 3, 4, 5], [4, 5, 3, 2, 1], true],
  [[1, 2, 3, 4, 5], [4, 3, 5, 1, 2], false],
]

testData.forEach((item) => {
  test(`栈 ${item[1]} ${item[2] ? '' : '不'} 是栈 ${item[0]} 的弹出顺序`, () => {
    expect(algo(item[0], item[1]))
      .toBe(item[2]);
  });
})
