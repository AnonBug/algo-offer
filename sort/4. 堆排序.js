function heapSort(arr) {
  arr.unshift(0);
  let len = arr.length - 1;

  // 把无序数组构造为最大堆
  for (let k = Math.floor(len / 2); k >= 1; k--) {
    // 从中间元素开始下沉
    sink(arr, k, len);
  }

  while (len > 1) {
    // 将顶部的最大值与数组的最后索引交换，并断开其与堆的链接
    exch(arr, 1, len--);
    // 由于顶部值发生了变化，需要重新恢复至最大堆状态
    sink(arr, 1, len);
  }

  arr.shift();
}


function less(arr, i, j) {
  return arr[i] <= arr[j];
}

function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function sink(arr, k, len) {
  while (2 * k <= len) {
    let j = 2 * k;
    if (j < len && less(arr, j, j + 1)) j++;
    if (!less(arr, k, j)) break;

    exch(arr, k, j);
    k = j;
  }
}

let res = [1, 5, 2, 8, 2, 10];
heapSort(res);
console.log(res);
