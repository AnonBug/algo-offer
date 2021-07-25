import algo from '../src/jz36'
// import { getArrayFromRandomLink, getRandomLinkByArray } from '../utils/link'
import { getTreeFromArray } from '../utils/tree';

const testData = [
  [4, 2, 5, 1, 3]
]

testData.forEach((item) => {
  test(`复杂链表 ${item} 的复制`, () => {
    expect(algo(getTreeFromArray(item)))
      // .toEqual(true);
  });
})
