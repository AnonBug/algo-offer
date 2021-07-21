const algo = require('../src/jz05');


const map = [
  ["We are happy.", "We%20are%20happy."],
  ['', ''],
  ['   ', '%20%20%20'],
]


map.forEach((item) => {
  test(`转换字符串 ${item[0]}`, () => {
    expect(algo(item[0])).toBe(item[1]);
  });
})
