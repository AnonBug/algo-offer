function partitionSort(arr, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;

  if (low >= high) return;

  const j = partition(arr, low, high);

  partitionSort(arr, low, j - 1);
  partitionSort(arr, j + 1, high);
}

function partition(arr, low, high) {
  let i = low, j = high + 1;

  while (true) {
    while (less(arr, ++i, low)) {
      if (i >= high) break;
    }

    while (less(arr, low, --j)) {
      if (j <= low) break;
    }

    if (i >= j) break;

    exch(arr, i, j);
  }

  exch(arr, low, j);
  return j;
}

function less(arr, i, j) {
  return arr[i] <= arr[j];
}

function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


let res = [4, 3, 6, 2, 8, 1];
partitionSort(res);
console.log(res);
