// fibonacci.ts

export function generarFibonacci(n: number): number[] {
    const fibonacciNumbers: number[] = [];
  
    if (n >= 1) {
      fibonacciNumbers.push(0);
    }
    if (n >= 2) {
      fibonacciNumbers.push(1);
    }
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
      fibonacciNumbers.push(nextFibonacci);
    }
  
    return fibonacciNumbers;
  }
  