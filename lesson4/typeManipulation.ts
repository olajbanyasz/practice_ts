export type isString<T> = T extends string ? true : false;

type Optional<T> = {
  [P in keyof T]?: T[P];
};

export interface User {
  id: number;
  name: string;
  email: string;
};

export type OptionalUser = Optional<User>;

export const user: OptionalUser = {
  id: 1,
  name: "John Doe"
};


/* Example of using User type directly shows that email is required, while OptionalUser allows it to be optional
const user1: User = {
  id: 1,
  name: "John Doe",
};
*/
