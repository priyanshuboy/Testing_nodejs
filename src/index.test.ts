import { test, expect } from '@jest/globals';
import sum from './index';

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});
