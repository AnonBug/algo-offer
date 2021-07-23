const algo = require('../src/jz07.js');
import { getArrayFromTreeNode } from '../utils/tree'

const map = [
  [{ preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] }, [3, 9, 20, null, null, 15, 7]],
  [{ preorder: [-1], inorder: [-1] }, [-1]],
  [{ preorder: [], inorder: [] }, []],
  [{ preorder: [1, 2, 3], inorder: [3, 2, 1] }, [1,2,null,3]],

]


map.forEach((item) => {
  test(`重建二叉树 ${item[0].preorder}`, () => {
    expect(getArrayFromTreeNode(algo(item[0].preorder, item[0].inorder)))
      .toStrictEqual(item[1]);
  });
})
