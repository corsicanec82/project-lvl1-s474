import { isEven } from '../src/games/even';
import { getGreaterDivisor } from '../src/games/gcd';

test('20 % 2 === 0 should return true', () => {
  expect(isEven(20)).toBe(true);
});

test('getGreaterDivisor(54, 96) should return 6', () => {
  expect(getGreaterDivisor(54, 96)).toBe(6);
});
