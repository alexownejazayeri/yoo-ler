/**
 * Calculates the sum of even Fibonacci numbers up to a specified maximum value.
 *
 * @param {number[]} terms - An array containing the previous and current Fibonacci terms. Default is [1, 2].
 * @param {number} sum - The current sum of even Fibonacci numbers. Default is 0.
 * @param {number} maxValue - The maximum value up to which Fibonacci numbers are considered. Default is 4000000.
 * @returns {number} - The sum of even Fibonacci numbers up to the specified maximum value.
 */

function sumEvenFibs(terms = [1, 2], sum = 0, maxValue = 4000000) {
  const [prevTerm, currSum] = terms;

  if (currSum % 2 === 0) {
    sum += currSum;
  }

  if (currSum >= maxValue) {
    return sum;
  } else {
    return sumEvenFibs([currSum, currSum + prevTerm], sum);
  }
}

const result = sumEvenFibs();
console.log({ result });
