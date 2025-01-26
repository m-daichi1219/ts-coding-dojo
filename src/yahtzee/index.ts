class Yahtzee {
  private _dice: number[];

  constructor(dice: number[]) {
    this._dice = dice;
  }

  score(role: 'ones' | 'twos' | 'threes' | 'fours'): number {
    switch (role) {
      case 'ones':
        return this._dice.filter((d) => d === 1).length;
      case 'twos':
        return this._dice.filter((d) => d === 2).length * 2;
      case 'threes':
        return this._dice.filter((d) => d === 3).length * 3;
      case 'fours':
        return this._dice.filter((d) => d === 4).length * 4;
      default:
        throw new Error('Invalid role');
    }
  }
}

export default Yahtzee;
