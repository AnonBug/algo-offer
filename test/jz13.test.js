 import algo from '../src/jz13.js';

const map = [
  [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED", true],
  [[["a","b"],["c","d"]], "abcd", false],
  [[['a']], 'b', false],
  [[["a","b"]], 'ba', true]
]


map.forEach((item) => {
  test(`矩阵 ${item[0]} 中的路径 ${item[1]}`, () => {
    expect(algo(item[0], item[1]))
      .toBe(item[2]);
  });
})
