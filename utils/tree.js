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
  const queue = []
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

export const getTreeFromArray = arr => {
  if (!arr.length) return null
  const root = new TreeNode(arr[0])
  const queue = []
  queue.push(root)
  let idx = 1
  while (idx < arr.length) {
    const item = queue.shift()
    if (arr[idx] !== null) {
      item.left = new TreeNode(arr[idx])
      queue.push(item.left)
    }
    idx++
    if (idx < arr.length && arr[idx] !== null) {
      item.right = new TreeNode(arr[idx])
      queue.push(item.right)
    }
    idx++
  }
  return root
}
