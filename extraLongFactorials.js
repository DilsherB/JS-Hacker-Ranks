function extraLongFactorials(n) {
    // Write your code here
  let factorial = BigInt(1);
  for (let i = BigInt(n); i >= 1; i--) {
    factorial *= i;
  }
  console.log(factorial.toString());
}
