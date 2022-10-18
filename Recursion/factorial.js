const factorialIterative = (num) => {
  let answer = 1;
  for (let i = 2; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
};

// console.log(factorialIterative(5));

const factorialRecursive = (num) => {
  if (num === 2) {
    return 2;
  }
  return num * factorialRecursive(num - 1);
};
console.log(factorialRecursive(5));
