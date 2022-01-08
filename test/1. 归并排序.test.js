import {mergeSort} from '../sort/1. 归并排序'

test('adds 1 + 2 to equal 3', () => {
  expect(mergeSort([3,1,4,2])).toStrictEqual([1, 2, 3, 4]);
});

