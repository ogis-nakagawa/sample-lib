import { add } from '#/add'

describe('add module', () => {
  it('Should addition', () => {
    expect(add(1, 2)).toBe(3)
  })
  it('Should addition with truncate the decimal point', () => {
    expect(add(1.2, 2.5)).toBe(3)
  })
})
