/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  // 二分法查找
  let left = 0, right = numbers.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2) 
    if (numbers[left] < numbers[right]) {
      break;
    } else if (numbers[left] > numbers[right]) {
      if (numbers[mid] < numbers[left]) {
        right = mid
      } else if (numbers[mid] > numbers[left]) {
        left = mid
      } else {
        left++
      }
    } else {
      left++
    }
  }
  return numbers[left]
};

export default minArray