/* 冒泡排序 */
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
          if (less(arr, j + 1, j)) {
              exch(arr, j + 1, j);
          }
      }
  }
}

/* 选择排序 */
function selectSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (less(arr, j, min)) {
              min = j;
          }
      }
      exch(arr, min, i)
  }
}
/* 插入排序 */
function insertSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
      for (let j = i; j > 0 && less(arr, j, j - 1); j--) {
          exch(arr, j, j - 1)
      }
  }
}

/* 希尔排序 */
function shellSort(arr) {
  const len = arr.length;
  let h = 1;

  while (h < Math.floor(len / 3)) h = h * 3 + 1;

  while (h >= 1) {
      for (let i = h; i < len; i++) {
          // 重点：这里改变了元素交互的跨度
          for (let j = i; j >= h && less(arr, j, j - h); j -= h) {
              exch(arr, j, j - h)
          }
      }
      h = Math.floor(h / 3);
  }
}

function less(arr, i, j) {
  return arr[i] <= arr[j];
}

function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let res = [4, 3, 6, 2, 8, 1];
shellSort(res);
console.log(res);
