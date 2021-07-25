/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  const getDoublyListFromTree = node => {
    let resNode = node;

    if (!node.left && !node.right) {
      resNode = node
      resNode.left = resNode.right = node
      return resNode
    }

    if (node.left) {
      resNode = getDoublyListFromTree(node.left)
      let tempTail = resNode.left
      tempTail.right = node
      resNode.left = node
      // node.right = resNode
      node.left = tempTail
    } else {
      resNode.left = node
    }

    if (node.right) {
      let rightList = getDoublyListFromTree(node.right)
      node.right = rightList
      resNode.left = rightList.left
      rightList.left.right = resNode
      rightList.left = node
    } else {
      node.right = resNode
    }
    return resNode
  }

  if (!root) return null

  return getDoublyListFromTree(root)
};

export default treeToDoublyList