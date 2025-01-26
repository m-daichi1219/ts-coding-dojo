import { describe, it, expect, beforeEach } from 'vitest';
import Yahtzee from '.';

describe('シングルの計算', () => {
  let yahtzee: Yahtzee;
  beforeEach(() => {
    yahtzee = new Yahtzee([1, 2, 3, 4, 5, 6]);
  });
  it('さいころが1, 2, 3, 4, 5, 6の時、役1の目の場合1ポイントになること', () => {
    expect(yahtzee.score('ones')).toBe(1);
  });
  it('さいころが1, 2, 3, 4, 5, 6の時、役2の目の場合2ポイントになること', () => {
    expect(yahtzee.score('twos')).toBe(2);
  });
  it('さいころが1, 2, 3, 4, 5, 6の時、役3の目の場合3ポイントになること', () => {
    expect(yahtzee.score('threes')).toBe(3);
  });
  it('さいころが1, 2, 3, 4, 5, 6の時、役4の目の場合4ポイントになること', () => {
    expect(yahtzee.score('fours')).toBe(4);
  });
});
