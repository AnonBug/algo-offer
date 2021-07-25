export class ListNode{
  constructor(val) {
    this.val = val
    this.next = null
  }
}

export class Link {
  constructor() {
    this.head = null
  }
}

export function getLinkByArray(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0])
  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return head
}

export class RandomLinkNode extends ListNode {
  constructor(val) {
    super(val)
    this.random = null
  }
}
export function getRandomLinkByArray(arr) {
  if (!arr.length) return null
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const linkNode = new RandomLinkNode(arr[i][0])
    map.set(i, linkNode)
  }

  for (let [key, value] of arr.entries()) {
    const target = map.get(key)
    target.next = map.get(key + 1) || null
    if (value[1] !== null) {
      const to = map.get(value[1])
      target.random = to
    }
  }

  return map.get(0)
}

export function getArrayFromRandomLink(root) {
  const res = []
  let cur = root
  const map = new Map()
  let idx = 0
  while (cur) {
    map.set(cur, idx)
    idx++
    cur = cur.next
  }
  cur = root
  while (cur) {
    let val = cur.val
    let random = cur.random ? map.get(cur.random) : null;
    res.push([val, random])
    cur = cur.next
  }

  return res
}