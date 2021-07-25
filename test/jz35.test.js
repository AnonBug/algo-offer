import algo from '../src/jz35'
import { getArrayFromRandomLink, getRandomLinkByArray } from '../utils/link'

const testData = [
  [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]],
  // [[1,1],[2,1]],
  // [[3,null],[3,0],[3,null]],
  // [],
]

testData.forEach((item) => {
  test(`复杂链表 ${item} 的复制`, () => {
    expect(getArrayFromRandomLink(algo(getRandomLinkByArray(item))))
      .toEqual(item);
  });
})
