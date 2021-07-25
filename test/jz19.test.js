import algo from '../src/jz19'

const testData = [
  // 什么叫面向测试用例编程！（战术后仰
  ['aa', 'a', false],
  ['aa', 'a*', true],
  ['ab', '.*', true], 
  ['aab', 'c*a*b*', true], 
  ["mississippi", "mis*is*p*.", false],
  ["ab", ".*c", false],
  ["aaa", "a*a", true],
  ["bbbba", ".*a*a", true],
  ["ab", ".*..", true],
  ["", "..*", false],
  ["aabcbcbcaccbcaabc", ".*a*aa*.*b*.c*.*a*", true],
]


testData.forEach((item) => {
  test(`字符串 ${item[0]} ${item[2] ? '' : '不'} 匹配模式 ${item[1]}`, () => {
    expect(algo(item[0], item[1]))
      .toBe(item[2]);
  });
})
