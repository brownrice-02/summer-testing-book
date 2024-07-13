// src/utils/divideNumbers/divideNumbers.test.js
import { describe, it, expect } from '@jest/globals';
import divideNumbers from './divideNumbers';

describe('divideNumbers', () => {
    // 兩數整除，得到一個整數
    it('should return the correct integer when dividing two integers that are divisible', () => {
        expect(divideNumbers(8, 4)).toBe(2);
    });

    // 被零除，應該丟出錯誤
    it('should throw an error when dividing by zero', () => {
        expect(() => divideNumbers(8, 0)).toThrow('Cannot divide by zero');
    });

    // 結果不是整數
    it('should return a float when dividing two integers that are not divisible', () => {
        expect(divideNumbers(7, 2)).toBeCloseTo(3.5);
    });
});
