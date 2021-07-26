import algo from '../src/jz37'
// import { getArrayFromRandomLink, getRandomLinkByArray } from '../utils/link'
import { getTreeFromArray } from '../utils/tree';

const testData = [
  [1, 2, 3, null, null, 4, 5]
]

testData.forEach((item) => {
  test(`序列化二叉树 ${item}`, () => {
    expect(algo.deserialize(algo.serialize(getTreeFromArray(item))))
      .toEqual(getTreeFromArray(item));
  });
})
