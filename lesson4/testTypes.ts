import type { isString, Person, Optional } from "./typeManipulation.js";
import { person } from "./typeManipulation.js";

export type onlyNameAndEmail<T extends Person> = Pick<T, "name" | "email">; // onlyNameAndEmail is now just the 'name' and 'email' properties of Person

const Test1: isString<"string"> = true; // true
const Test2: isString<5> = false; // false

console.log("Test1:", Test1); // true
console.log("Test2:", Test2); // false

export type OptionalPerson = Optional<Person>; // All properties of Person are now optional

export const user: OptionalPerson = {
  id: 1,
  name: "John Doe"
};

export type UserNameAndEmail = onlyNameAndEmail<Person>; // UserNameAndEmail is now just the 'name' and 'email' properties of Person

const userInfo: UserNameAndEmail = {
  name: person.name,
  email: person.email
};

console.log("userInfo:", userInfo);