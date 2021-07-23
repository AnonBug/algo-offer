export class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

// 层序遍历
export function getArrayFromTreeNode(root) {
  if (!root) return []
  const arr = []
  let queue = []
  queue.push(root)
  while (queue.length) {
    const item = queue.shift()
    if (item) {
      arr.push(item.val)
      queue.push(item.left)
      queue.push(item.right)
    } else {
      arr.push(null)
    }
  }
  let flag = false
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== null) {
      flag = true
    }
    if (flag) break;
    arr.pop()
  }
  return arr
}