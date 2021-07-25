/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import { TreeNode } from '../utils/tree'

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!B) return false

  const isSub = (rootA, rootB) => {
    if (!rootA && !rootB) return true
    if (!rootB) return true
    if (!rootA) return false
    return rootA.val === rootB.val && isSub(rootA.left, rootB.left) && isSub(rootA.right, rootB.right)
  }

  const dfs = rootA => {
    if (!rootA) return false
    if (rootA.val === B.val && isSub(rootA, B)) {
      return true
    } else {
      return dfs(rootA.left) || dfs(rootA.right)
    }
  }

  return dfs(A)
};

export default isSubStructure