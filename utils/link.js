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