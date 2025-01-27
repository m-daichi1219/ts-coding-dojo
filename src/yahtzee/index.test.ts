import { describe, it, expect, beforeEach } from 'vitest';
import Yahtzee from '.';

describe('Yahtzeeのスコアを算出する Yahtzeeクラス', () => {
  let yahtzee: Yahtzee;
  describe('シングルの計算', () => {
    beforeEach(() => {
      yahtzee = new Yahtzee([1, 2, 3, 4, 5, 6]);
    });

    describe('役1の目の計算', () => {
      it('さいころが1, 2, 3, 4, 5, 6の時、1ポイントになること', () => {
        expect(yahtzee.score('ones')).toBe(1);
      });
    });
    describe('役2の目の計算', () => {
      it('さいころが1, 2, 3, 4, 5, 6の時、2ポイントになること', () => {
        expect(yahtzee.score('twos')).toBe(2);
      });
    });
    describe('役3の目の計算', () => {
      it('さいころが1, 2, 3, 4, 5, 6の時、3ポイントになること', () => {
        expect(yahtzee.score('threes')).toBe(3);
      });
    });
    describe('役4の目の計算', () => {
      it('さいころが1, 2, 3, 4, 5, 6の時、4ポイントになること', () => {
        expect(yahtzee.score('fours')).toBe(4);
      });
    });
    describe('役5の目の計算', () => {
      it('さいころが1, 2, 3, 4, 5, 6の時、5ポイントになること', () => {
        expect(yahtzee.score('fives')).toBe(5);
      });
    });
    describe('役6の目の計算', () => {
      it('さいころが1, 2, 3, 4, 5, 6の時、6ポイントになること', () => {
        expect(yahtzee.score('sixes')).toBe(6);
      });
    });
  });
  describe('ペアの計算', () => {
    describe('役ペアの計算', () => {
      it('さいころが1, 1, 2, 2, 3, 3の時、6ポイントになること', () => {
        yahtzee = new Yahtzee([1, 1, 2, 2, 3, 3]);
        expect(yahtzee.score('pair')).toBe(6);
      });

      it('さいころが2, 2, 2, 2, 4, 4の時、8ポイントになること', () => {
        yahtzee = new Yahtzee([2, 2, 2, 2, 4, 4]);
        expect(yahtzee.score('pair')).toBe(8);
      });
    });
  });
});
