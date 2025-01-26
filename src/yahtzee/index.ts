class Yahtzee {
  private _dice: number[];

  constructor(dice: number[]) {
    this._dice = dice;
  }

  score(role: 'ones'): number {
    switch (role) {
      case 'ones':
        return this._dice.filter((d) => d === 1).length;
      default:
        throw new Error('Invalid role');
    }
  }
}

export default Yahtzee;
