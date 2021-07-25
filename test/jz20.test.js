import algo from '../src/jz20'

const testData = ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123", "12.e5"]
const notData = ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]


testData.forEach((item) => {
  test(`字符串 ${item} ${true ? '' : '不'} 可以表示数值`, () => {
    expect(algo(item))
      .toBe(true);
  });
})

notData.forEach((item) => {
  test(`字符串 ${item} ${false ? '' : '不'} 可以表示数值`, () => {
    expect(algo(item))
      .toBe(false);
  });
})