"use strict";

function euclid(firstNumber, secondNumber) {
  while (secondNumber !== 0) {
    const remainder = firstNumber % secondNumber;

    firstNumber = secondNumber;
    secondNumber = remainder;
  }

  return firstNumber;
}

console.log(euclid(12, 6));
console.log(euclid(180, 48));
console.log(euclid(100, 25));
console.log(euclid(13, 29));
