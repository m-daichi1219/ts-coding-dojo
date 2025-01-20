import { describe, it, expect, vi } from 'vitest';

describe('vitest サンプル', () => {
  const add = (a: number, b: number): number => a + b;

  it('同期的な関数の実行', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  const fetchData = async (): Promise<string> => {
    return new Promise((resolve) =>
      setTimeout(() => resolve('Hello, Vitest!'), 100),
    );
  };

  it('非同期関数の実行', async () => {
    const data = await fetchData();
    expect(data).toBe('Hello, Vitest!');
  });

  const throwIfNegative = (num: number): void => {
    if (num < 0) {
      throw new Error('Negative number is not allowed');
    }
  };

  it('エラーが発生することの検証', () => {
    expect(() => throwIfNegative(-1)).toThrow('Negative number is not allowed');
  });

  it('エラーが発生しないことの検証', () => {
    expect(() => throwIfNegative(1)).not.toThrow();
  });

  const sumArray = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };

  it('複数の引数をとる関数の実行', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([])).toBe(0);
  });

  const multiply = (a: number, b: number): number => a * b;

  it.each([
    [2, 3, 6],
    [4, 5, 20],
    [-2, 2, -4],
    [0, 10, 0],
  ])('パラメータ化テスト(%i, %i) = %i', (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
  });

  it('モック関数の呼び出し回数と引数の検証', () => {
    const mockFn = vi.fn();
    mockFn('Hello');
    mockFn('Vitest');

    expect(mockFn).toHaveBeenCalledTimes(2); // 呼び出し回数を検証
    expect(mockFn).toHaveBeenCalledWith('Hello'); // 特定の引数で呼ばれたか検証
    expect(mockFn).toHaveBeenCalledWith('Vitest');
  });

  const fetchDataWithError = async (): Promise<string> => {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Something went wrong')), 100),
    );
  };

  it('非同期関数のエラーを検証', async () => {
    await expect(fetchDataWithError()).rejects.toThrow('Something went wrong');
  });

  it('スナップショットテスト', () => {
    const user = { name: 'John', age: 30 };
    expect(user).toMatchSnapshot();
  });
});
