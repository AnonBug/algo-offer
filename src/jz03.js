/** 使用 hash 集合
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const set = new Set()
  for (let num of nums) {
    if (set.has(num)) {
      return num
    }
    set.add(num)
  }
};

// findRepeatNumber = nums => {
//   // 使用特性，原地修改数组
// }

module.exports = findRepeatNumber