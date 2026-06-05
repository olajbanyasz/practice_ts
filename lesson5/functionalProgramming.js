const add = (a, b) => a + b;
const readOnlyArray = [1, 2, 3];
// readOnlyArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
const numberArray = [1, 2, 3];
const mapArray = (arr, fn) => arr.map(fn);
const multiplyByTwo = (x) => x * 2;
const addOne = (x) => x + 1;
const result = mapArray(numberArray, multiplyByTwo);
console.log("Result of mapping:", result); // [2, 4, 6]
const multiply = (a) => (b) => a * b;
const curryResult = multiply(5)(3);
console.log("Result of currying:", curryResult); // 15
const composedFunction = (x) => addOne(multiplyByTwo(x));
const composedResult = composedFunction(4);
console.log("Result of function composition:", composedResult); // 9
export {};
//# sourceMappingURL=functionalProgramming.js.map