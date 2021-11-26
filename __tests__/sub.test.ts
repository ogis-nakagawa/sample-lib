import { sub } from '#/sub'

describe('sub module', () => {
  it('Should substraction', () => {
    expect(sub(2, 1)).toBe(1)
  })
  it('Should substraction with truncate the decimal point', () => {
    expect(sub(2.3, 1.5)).toBe(1)
  })
})
