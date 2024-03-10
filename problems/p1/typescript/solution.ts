function main(n = 1000) {
  let counter = 0;
  let sum = 0;

  while (counter < n) {
    if (counter % 5 === 0 || counter % 3 === 0) {
      sum += counter;
    }
    counter++;
  }

  return sum;
}

const result = main();
console.log({ result });
