import { Stack } from '../utils/stack'

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = new Stack()

  const set = new Set()
  let pushIdx = 0

  for (let i = 0; i < popped.length; i++) {
    if (!set.has(popped[i])) {
      while (pushed[pushIdx] !== popped[i]) {
        stack.push(pushed[pushIdx])
        set.add(pushed[pushIdx])
        pushIdx++
      }
      pushIdx++
    } else if (stack.peek() === popped[i]){
      stack.pop()
    } else {
      return false
    }
  }
  return true
};

export default validateStackSequences