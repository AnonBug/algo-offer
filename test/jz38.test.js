import algo from '../src/jz38'

const testData = [
  // [1, 2, 3, null, null, 4, 5]
  ['abc', ["abc","acb","bac","bca","cab","cba"]],
  ['a', ['a']],
  ['ab', ['ab', 'ba']],
  ['aaaaaaaa', ['aaaaaaaa']]
]

testData.forEach((item) => {
  test(`字符串 ${item[0]} 的排列`, () => {
    expect(algo(item[0]))
      .toEqual(item[1]);
  });
})
