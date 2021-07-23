const algo = require('../src/jz06');
import { getLinkByArray } from '../utils/link'

const map = [
  [[1, 3, 2], [2, 3, 1]],
  [[], []]
]


map.forEach((item) => {
  test(`从尾到头打印链表 ${item[0]}`, () => {
    expect(algo(getLinkByArray(item[0]))).toStrictEqual(item[1]);
  });
})
