import { Stack } from '../utils/stack';

var CQueue = function () {
  this.output = new Stack()
  this.input = new Stack()
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.input.push(value)
  return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.output.isEmpty()) {
    while (!this.input.isEmpty()) {
      this.output.push(this.input.pop())
    }
  }
  if (this.output.isEmpty()) return -1;
  return this.output.pop()
}

export default CQueue;