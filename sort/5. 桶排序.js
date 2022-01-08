function bucketSort(arr, r = 5) {
  const len = arr.length - 1;

  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < len; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }

  let range = Math.floor(max - min + 1) / r + 1;

  const buckets = new Array(r).fill(0).map(item => [])
  for (let i = 0; i < len; i++) {
    let idx = Math.floor((arr[i] - min) / range);
    buckets[idx].push(arr[i])
  }

  for (let bucket of buckets) {
    // 使用其它排序算法对桶内元素进行原地排序
    bubbleSort(arr);
  }

  return buckets.flat()
}

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


function less(arr, i, j) {
  return arr[i] <= arr[j];
}

function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


let res = [1, 5, 2, 8, 2, 10];
bucketSort(res);
console.log(res);
