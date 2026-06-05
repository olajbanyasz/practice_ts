import { person } from "./typeManipulation.js";
const Test1 = true; // true
const Test2 = false; // false
console.log("Test1:", Test1); // true
console.log("Test2:", Test2); // false
export const user = {
    id: 1,
    name: "John Doe"
};
const userInfo = {
    name: person.name,
    email: person.email
};
console.log("userInfo:", userInfo);
//# sourceMappingURL=testTypes.js.map