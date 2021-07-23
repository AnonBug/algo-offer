/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
  const res = []
  let cur = head
  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }
  return res.reverse()
};

module.exports = reversePrint