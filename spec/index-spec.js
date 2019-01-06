const  compose = require('../src')


describe("Compose", () => {
  it("", () => {
    const g = i => i
    const f = i => i+1

    const g_after_f = compose(g,f)

    expect(g_after_f(3)).toEqual(4)
  })

  it("", () => {
    const divide_3 = i => i/3
    const inc = i => i+1

    const divide_3_after_inc = compose(divide_3, inc)

    expect(divide_3_after_inc(2)).toEqual(1)
  })

  it("", () => {
    const divide_3 = i => i/3
    const sum = (a,b) => a+b

    const divide_3_after_sum = compose(divide_3, sum)

    expect(divide_3_after_sum(1,2)).toEqual(1)
  })

  it("", () => {
    const divide_3 = i => i/3
    const inc = i => i+1
    const sum = (a,b) => a+b

    const divide_3_after_inc_after_sum = compose(divide_3, inc, sum)

    expect(divide_3_after_inc_after_sum(1,1)).toEqual(1)
  })
})
