function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
  }
}

export default combine;

console.log(combine(5, 10));
console.log(combine('Hello, ', 'world!'));
