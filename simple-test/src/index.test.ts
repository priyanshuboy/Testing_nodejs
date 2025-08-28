// learn descripe , it, test, expect from jest

import {it, test, expect } from '@jest/globals';
import sum from './index';
import { multiply } from './index';

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});

it('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
});
