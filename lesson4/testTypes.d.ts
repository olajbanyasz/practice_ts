import type { Person, Optional } from "./typeManipulation.js";
export type onlyNameAndEmail<T extends Person> = Pick<T, "name" | "email">;
export type OptionalPerson = Optional<Person>;
export declare const user: OptionalPerson;
export type UserNameAndEmail = onlyNameAndEmail<Person>;
//# sourceMappingURL=testTypes.d.ts.map