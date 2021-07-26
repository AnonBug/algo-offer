/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let left = 0, right = this.arr.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (num < this.arr[mid]) {
      right = mid - 1
    } else if (num > this.arr[mid]) {
      left = mid + 1
    } else {
      left = mid
      break;
    }
  }

  if (this.arr[left] < num) {
    this.arr.splice(left + 1, 0, num)
  } else {
    this.arr.splice(left, 0, num)
  }

  return null
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (!this.arr.length) return null;
  if (this.arr.length & 1 === 1) {
    return this.arr[(this.arr.length - 1) / 2]
  } else {
    let mid = this.arr.length / 2
    return (this.arr[mid] + this.arr[mid - 1]) / 2
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

export default MedianFinder