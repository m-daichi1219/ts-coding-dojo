import { describe, it, expect } from 'vitest';
import Bento from '.';

describe('市内で「松」「竹」「梅」各1個購入、割引コードなしの場合', () => {
  it('見積が1620円となること', () => {
    const bento = new Bento(1, 1, 1, 'ONIGIRI', 'within');
    const price = bento.price;
    expect(price).toEqual(1620);
  });
});
