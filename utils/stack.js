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

  isEmpty() {
    return this.stack.length === 0
  }
}
