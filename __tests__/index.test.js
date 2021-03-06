import { getGreaterDivisor } from '../src/games/gcd';
import { isPrime } from '../src/games/prime';
import { isEven } from '../src/games/even';
import { calculate } from '../src/games/calc';

test('getGreaterDivisor(54, 96) should return 6', () => {
  expect(getGreaterDivisor(54, 96)).toBe(6);
});

test('getGreaterDivisor(12, 6) should return 6', () => {
  expect(getGreaterDivisor(12, 6)).toBe(6);
});

test('isEven(28) should return true', () => {
  expect(isEven(28)).toBe(true);
});

test('isPrime(5) should return true', () => {
  expect(isPrime(5)).toBe(true);
});

test('isPrime(4) should return false', () => {
  expect(isPrime(4)).toBe(false);
});

test('isPrime(1) should return false', () => {
  expect(isPrime(1)).toBe(false);
});

test('12 * 7 should return 84', () => {
  expect(calculate(12, 7, '*')).toBe(84);
});

test('12 - 7 should return 5', () => {
  expect(calculate(12, 7, '-')).toBe(5);
});

test('12 + 7 should return 19', () => {
  expect(calculate(12, 7, '+')).toBe(19);
});

test('12 / 7 should return empty string', () => {
  expect(calculate(12, 7, '/')).toBe('');
});
