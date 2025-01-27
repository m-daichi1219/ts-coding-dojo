class Yahtzee {
  private _dice: number[];

  constructor(dice: number[]) {
    this._dice = dice;
  }

  score(
    role:
      | 'ones'
      | 'twos'
      | 'threes'
      | 'fours'
      | 'fives'
      | 'sixes'
      | 'pair'
      | 'two-pair',
  ): number {
    switch (role) {
      case 'ones':
        return this._dice.filter((d) => d === 1).length;
      case 'twos':
        return this._dice.filter((d) => d === 2).length * 2;
      case 'threes':
        return this._dice.filter((d) => d === 3).length * 3;
      case 'fours':
        return this._dice.filter((d) => d === 4).length * 4;
      case 'fives':
        return this._dice.filter((d) => d === 5).length * 5;
      case 'sixes':
        return this._dice.filter((d) => d === 6).length * 6;
      case 'pair':
        const max = Math.max(...this._dice);
        return this._dice.filter((d) => d === max).length * max;
      case 'two-pair':
        const pairs = this._dice.reduce(
          (acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
          },
          {} as Record<number, number>,
        );

        const pairValues = Object.keys(pairs)
          .filter((key) => pairs[Number(key)] >= 2)
          .map(Number)
          .sort((a, b) => b - a);

        if (pairValues.length >= 2) {
          return pairValues[0] * 2 + pairValues[1] * 2;
        }

        return 0;
      default:
        throw new Error('Invalid role');
    }
  }
}

export default Yahtzee;
