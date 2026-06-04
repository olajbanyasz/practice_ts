import type { isString } from "./typeManipulation.js";

const Test1: isString<"string"> = true; // true
const Test2: isString<5> = false; // false

console.log("Test1:", Test1); // true
console.log("Test2:", Test2); // false