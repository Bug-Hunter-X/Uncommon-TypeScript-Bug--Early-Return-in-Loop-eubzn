function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    return; //Early return in the loop!
  }
}

printNumbers2(5); //This will only print 1