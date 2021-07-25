import algo from '../src/jz26'
import { getTreeFromArray } from '../utils/tree';

const testData =[
  [[1,2,3], [3,1], false],
  [[3, 4, 5, 1, 2], [4, 1], true],
]

testData.forEach((item) => {
  test(`二叉树 ${item[1]} ${item[2] ? '' : '不'} 是二叉树 ${item[0]} 的子结构`, () => {
    expect(algo(getTreeFromArray(item[0]), getTreeFromArray(item[1])))
      .toBe(item[2]);
  });
})
