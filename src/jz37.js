/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { getArrayFromTreeNode, getTreeFromArray } from '../utils/tree'

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return JSON.stringify(getArrayFromTreeNode(root))
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return getTreeFromArray(JSON.parse(data))
};

export default {
  serialize, deserialize
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */