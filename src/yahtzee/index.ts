class Yahtzee {
  private _dice: number[];

  constructor(dice: number[]) {
    this._dice = dice;
  }

  get score(): number {
    return 1;
  }
}

export default Yahtzee;
