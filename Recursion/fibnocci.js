const fibIterative = (n) => {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
console.log(fibIterative(8));
// Recursive
const fib = (n) => {
  // O(2^n)
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(3));
