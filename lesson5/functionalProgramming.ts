const add = (a: number, b: number): number => a + b;

const readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
// readOnlyArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.

const sum = add(2, 3);
console.log('Sum:', sum);
console.log('Read-only array:', readOnlyArray);

const numberArray: number[] = [1, 2, 3];

const mapArray = (arr: number[], fn: (x: number) => number): number[] => arr.map(fn);

const multiplyByTwo = (x: number): number => x * 2;
const addOne = (x: number): number => x + 1;

const result = mapArray(numberArray, multiplyByTwo);
console.log('Result of mapping:', result); // [2, 4, 6]

const multiply =
  (a: number) =>
  (b: number): number =>
    a * b;

const curryResult = multiply(5)(3);
console.log('Result of currying:', curryResult); // 15

const composedFunction = (x: number): number => addOne(multiplyByTwo(x));
const composedResult = composedFunction(4);
console.log('Result of function composition:', composedResult); // 9
