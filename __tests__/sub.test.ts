import { add } from '#/add'

describe('add module', () => {
  it('Should add', () => {
    expect(add(1, 2)).toBe(3)
  })
})
