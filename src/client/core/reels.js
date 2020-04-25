export class Random {
  prev = 0
  next() {
    let rnd = this.prev
    while (rnd === this.prev) {
      rnd = Math.round(Math.random() * 7)
    }
    this.prev = rnd
    return rnd
  }
}

export class Reel {
  reel = []
  random = new Random()
  constructor(reel) {
    this.reel = reel
  }
  next() {
    return this.reel[this.random.next()]
  }
}

export class Reels {
  reels = [
    new Reel(['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon']),
    new Reel(['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']),
    new Reel(['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']),
  ]
  spin() {
    return this.reels.map(x => x.next())
  }
}
