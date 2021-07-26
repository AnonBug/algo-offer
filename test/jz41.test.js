import MedianFinder from '../src/jz41'

const testData = [
  [["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"], [[],[1],[2],[],[3],[]], [null,null,null,1.50000,null,2.00000]],
  [["MedianFinder","addNum","findMedian","addNum","findMedian"], [[],[2],[],[3],[]], [null,null,2.00000,null,2.50000]],
]
let mf = null;
testData.forEach((item) => {
  const [methods, params, outputs] = item
  methods.forEach((method, index) => {
    const param = params[index][0]
    test(`执行 ${method}(${param})`, () => {
      if (method === 'MedianFinder') {
        mf = new MedianFinder(param)
      } else {
        expect(mf[method](param))
          .toBe(outputs[index]);
      }
    });
  })
})
