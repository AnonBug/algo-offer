/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

import { RandomLinkNode as Node } from '../utils/link'

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  const root = new Node(head.val)
  let curOld = head, curCopy = root
  const map = new Map()
  map.set(curOld, curCopy)
  while (curOld.next) {
    curCopy.next = new Node(curOld.next.val)
    curOld = curOld.next
    curCopy = curCopy.next
    map.set(curOld, curCopy)
  }

  curOld = head, curCopy = root
  while (curOld) {
    if (curOld.random) {
      curCopy.random = map.get(curOld.random)
    }
    curOld = curOld.next
    curCopy = curCopy.next
  }

  return root
};

export default copyRandomList