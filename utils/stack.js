export class Stack {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push(val)
  }

  pop() {
    if (this.isEmpty()) return null

    return this.stack.pop()
  }

  peek() {
    if (this.isEmpty()) return null
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0
  }
}
