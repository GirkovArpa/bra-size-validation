'use strict';

const validNumbers = Array
  .from({ length: 22 }, (_, i) => 6 + (i * 2))
  .concat(Array.from({ length: 12 }, (_, i) => 60 + (i * 5)));

const validLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'AAA', 'AA', 'DD', 'DDD', 'HH', 'HHH'
];

const validSizes = validNumbers.map((number) => validLetters
  .map((letter) => number + letter))
  .flat();

const invalidNumbers = Array
  .from({ length: 1_000 }, (_, i) => i)
  .filter((n) => !validNumbers.includes(n))

const invalidLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  .map((letter) => Array.from({ length: 4 }, (_, i) => letter.repeat(i + 1)))
  .flat();

const invalidSizes = invalidNumbers.map((number) => invalidLetters
  .map((letter) => number + letter))
  .flat();

const regex = /^(((([0-4])(0|2|4|6|8))|(6|8))|(((6|7|8|9)(0|5))|(1[01][05])))((AAA)|(AA)|(DD)|(DDD)|(HH)|(HHH)|[A-I])$/;

const falsePositives = invalidSizes.filter((size) => regex.test(size));
console.log({ falsePositives });
console.table(validSizes.map((size) => ({ size, isValid: regex.test(size) })));
