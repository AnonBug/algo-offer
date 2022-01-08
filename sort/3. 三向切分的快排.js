function quickThreeSort(arr, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;

  if (low >= high) return;

  const [lt, gt] = partition(arr, low, high);

  quickThreeSort(arr, low, lt - 1);
  quickThreeSort(arr, gt + 1, high);
}

function partition(arr, low, high) {
  let lt = low,
    i = low + 1,
    gt = high;
  const v = arr[low];

  while (i <= gt) {
    if (arr[i] < v) exch(arr, lt++, i++);
    else if (arr[i] > v) exch(arr, i, gt--);
    else i++;
  }

  return [lt, gt]
}

function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let res = [4, 3, 6, 4, 4, 4, 2, 8, 4, 1];
quickThreeSort(res);
console.log(res);
