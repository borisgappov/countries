import Reels from './reels'
import Wallet from './wallet'

class SlotMachine {
  spinPrice = 1;
  reels = new Reels();
  minSpinCount = 3; // user can't win often than onece per 3 spins
  spinCounter = 0;
  wallet = new Wallet(10000);
  slots = this.reels.spin();

  spin(userWallet) {
    let money = userWallet.get(this.spinPrice);
    if (!money) {
      return {
        slots: this.slots,
        error: 'Not enough money'
      }
    }
    this.wallet.add(money);

    let results = [];
    let won = false;
    let done = false;
    let winning = 0;
    while (!done) {
      results = this.reels.spin();
      won = [...new Set(results)].length < 3;
      if (this.spinCounter >= (this.minSpinCount + Math.random() * 3) || !won) {
        done = true;
      }
    }
    if (won) {
      this.spinCounter = 0;
      winning = this.getWinning(results);
      userWallet.add(winning);
    } else {
      this.spinCounter++;
    }
    this.slots = results;
    return {
      slots: results,
      winning: winning
    };
  }

  getWinning(slots) {
    if (slots.filter(x => x === 'cherry').length === 3) {
      return 50;
    } else if (slots.filter(x => x === 'cherry').length === 2) {
      return 40;
    } else if (slots.filter(x => x === 'apple').length === 3) {
      return 20;
    } else if (slots.filter(x => x === 'apple').length === 2) {
      return 10;
    } else if (slots.filter(x => x === 'banana').length === 3) {
      return 15;
    } else if (slots.filter(x => x === 'banana').length === 2) {
      return 5;
    } else if (slots.filter(x => x === 'lemon').length === 3) {
      return 3;
    } else {
      return 0;
    }
  }
}

export default SlotMachine;