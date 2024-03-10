interface sumEvenFibsArgs {
  sum: number;
  maxValue?: number;
  terms?: [number, number];
}

function sumEvenFibs({
  sum = 0,
  maxValue = 10,
  terms = [1, 2],
}: sumEvenFibsArgs): number {
  const [previousTerm, currentSum] = terms;

  if (currentSum % 2 === 0) {
    sum += currentSum;
  }

  if (previousTerm >= maxValue) {
    return sum;
  } else {
    return sumEvenFibs({
      sum,
      maxValue,
      terms: [currentSum, currentSum + previousTerm],
    });
  }
}

const result = sumEvenFibs({ sum: 0, maxValue: 4000000 });
console.log({ result });
