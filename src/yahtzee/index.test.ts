import { describe, it, expect } from 'vitest';
import Yahtzee from '.';

describe('シングルの計算', () => {
  it('1さいころが1, 2, 3, 4, 5, 6の時、役1の目の場合1ポイントになること', () => {
    const yahtzee = new Yahtzee([1, 2, 3, 4, 5, 6]);
    const score = yahtzee.score;
    expect(score).toBe(1);
  });
});
