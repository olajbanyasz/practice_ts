export type isString<T> = T extends string ? true : false;

export interface Person {
  id: number;
  name: string;
  email: string;
}

export type Optional<T> = {
  [P in keyof T]?: T[P];
};

export const person: Person = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
};

/* Example of using Person type directly shows that email is required, while OptionalPerson allows it to be optional
const user1: Person = {
  id: 1,
  name: "John Doe",
};
*/
