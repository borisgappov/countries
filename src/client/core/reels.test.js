import { Random } from './reels'

test('Generate random values from 0 to 7', () => {
  let random = new Random()
  let prev = -1
  for (var i = 0; i < 100; i++) {
    let next = random.next()
    expect(next).toBeGreaterThanOrEqual(0)
    expect(next).toBeLessThanOrEqual(7)
    expect(next).not.toEqual(prev)
    prev = next
  }
})
