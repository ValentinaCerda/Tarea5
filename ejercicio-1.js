// Mostrar en consola la secuencia de Fibonacci:
// a. Entre los números 0 y 1000.
// b. Números pares entre 0 y 1000.
// c. Números impares entre 0 y 1000.

const fibonacci = (n) => {
  const allFibonacci = [0, 1];
  for(let i=2; i<n; i++) {
    allFibonacci[i] = allFibonacci[i - 2] + allFibonacci[i - 1];
  }
  console.log(allFibonacci);
  console.log('Números pares: ', allFibonacci.filter(e => e % 2 === 0));
  console.log('Números impares: ', allFibonacci.filter(e => e % 2 !== 0));
}
fibonacci(17);