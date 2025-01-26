class Yahtzee {
  private _dice: number[];

  constructor(dice: number[]) {
    this._dice = dice;
  }

  score(role: 'ones' | 'twos'): number {
    switch (role) {
      case 'ones':
        return this._dice.filter((d) => d === 1).length;
      case 'twos':
        return this._dice.filter((d) => d === 2).length * 2;
      default:
        throw new Error('Invalid role');
    }
  }
}

export default Yahtzee;
