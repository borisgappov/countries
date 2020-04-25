export class Wallet {
  value = 0

  constructor(value) {
    this.value = value
  }

  get(amount) {
    if (this.value >= amount) {
      this.value -= amount
      return amount
    } else {
      return 0
    }
  }

  add(amount) {
    this.value += amount
  }
}
