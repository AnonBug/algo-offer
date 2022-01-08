import {ListNode} from '../utils/link'

// 合并两个排序链表
function mergeSortLinks(link1, link2) {
  // 非空判断，当其中一个为空时，直接返回另一个
  if (!link1 || !link2) return link1 || link2

  let newHead = null
  if (link1.val <= link2.val) {
    newHead = link1
    newHead.next = mergeSortLinks(link1.next, link2)
  } else {
    newHead = link2
    newHead.next = mergeSortLinks(link1, link2.next)
  }

  return newHead
}

export default mergeSortLinks