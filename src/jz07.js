/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import { TreeNode } from '../utils/tree.js'
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const fn = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) return null;
    
    let rootNum = preorder[preStart]
    const root = new TreeNode(rootNum)
    if (preStart === preEnd) return root

    let mid = inorder.indexOf(rootNum)
    // 通过长度计算正确的索引位置
    let leftLength = mid - inStart
    root.left = fn(preStart + 1, preStart + leftLength, inStart, mid - 1)
    root.right = fn(preStart + leftLength + 1, preEnd, mid + 1, inEnd)
    return root
  }  
  return fn(0, preorder.length - 1, 0, inorder.length - 1)
};


module.exports = buildTree