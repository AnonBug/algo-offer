import CQueue from '../src/jz09'




const map = [
  [
    ["CQueue", "appendTail", "deleteHead", "deleteHead"], // 执行方法
    [[], [3], [], []], // 入参
    [null, null, 3, -1], // 出参
  ],

  [
    ["CQueue", "deleteHead", "appendTail", "appendTail", "deleteHead", "deleteHead"],
    [[], [], [5], [2], [], []]
    , [null, -1, null, null, 5, 2]
  ]

]


let cqueue = null;
map.forEach((item) => {
  const [methods, params, outputs] = item
  methods.forEach((method, index) => {
    const param = params[index][0]
    test(`执行 ${method}(${param})`, () => {
      if (method === 'CQueue') {
        cqueue = new CQueue(param)
        // expect(new CQueue(param))
        //  .toBe(outputs[index])
      } else {
        expect(cqueue[method](param))
          .toBe(outputs[index]);
      }
    });
  })
})
